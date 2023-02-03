document.getElementById('session').addEventListener('submit', function (event) {
  event.preventDefault();
  const identity = document.getElementById('identity').value;
  const secret = document.getElementById('secret').value;
  const profile = window.GroundstationDemoUsers.find(function (user) {
    return user.identity === identity && user.password === secret;
  });
  document.getElementById('result').textContent = profile
    ? 'Session locale : ' + profile.displayName
    : 'Profil de présentation inconnu.';
});
