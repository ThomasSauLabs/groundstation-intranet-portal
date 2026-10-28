function sessionBytes(value) {
  return Uint8Array.from(atob(value), function (character) {
    return character.charCodeAt(0);
  });
}

async function openLocalSession(profile, password) {
  const encoder = new TextEncoder();
  const material = encoder.encode(profile.identity + '\0' + password);
  const baseKey = await crypto.subtle.importKey('raw', material, 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    {name: 'PBKDF2', salt: sessionBytes(profile.session.salt), iterations: profile.session.iterations, hash: 'SHA-256'},
    baseKey,
    {name: 'AES-GCM', length: 256},
    false,
    ['decrypt']
  );
  const content = await crypto.subtle.decrypt(
    {name: 'AES-GCM', iv: sessionBytes(profile.session.iv), tagLength: 128},
    key,
    sessionBytes(profile.session.data)
  );
  return new TextDecoder().decode(content);
}

let sessionPending = false;
document.getElementById('session').addEventListener('submit', async function (event) {
  event.preventDefault();
  if (sessionPending) return;
  const result = document.getElementById('result');
  const identity = document.getElementById('identity').value;
  const password = document.getElementById('secret').value;
  const profile = window.GroundstationDemoUsers.find(function (user) {
    return user.identity === identity;
  });
  if (!profile) {
    result.textContent = 'Profil de présentation inconnu.';
    return;
  }
  sessionPending = true;
  result.textContent = 'Chargement de la session…';
  try {
    result.textContent = await openLocalSession(profile, password);
  } catch (error) {
    result.textContent = 'Profil de présentation inconnu.';
  } finally {
    sessionPending = false;
  }
});
