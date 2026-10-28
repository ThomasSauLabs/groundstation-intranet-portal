document.getElementById('session').addEventListener('submit', function (event) {
  event.preventDefault();
  const identity = document.getElementById('id').value;
  const secret = document.getElementById('pw').value;
  const profile = window.GroundstationDemoUsers.find(function (user) {
    return user.id === id && user.password === pw;
  });
  document.getElementById('result').textContent = profile
    ? 'Session locale : ' + profile.displayName
    : 'Profil de présentation inconnu.';
});
