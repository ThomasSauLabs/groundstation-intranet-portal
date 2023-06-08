const snapshot = window.HeliosSnapshot;
snapshot.services.forEach(function (service) {
  const item = document.createElement('li');
  item.textContent = service.name + ' : ' + service.status;
  document.getElementById('services').appendChild(item);
});
document.getElementById('operator').textContent = 'Profil affiché : ' + snapshot.operator.identity;
