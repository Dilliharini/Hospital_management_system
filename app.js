const doctors = [
  { id: 1, name: 'Dr. Asha Rao', specialty: 'Cardiology', days: 'Mon-Fri', times: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
  { id: 2, name: 'Dr. Ravi Kumar', specialty: 'Orthopedics', days: 'Tue-Sat', times: ['10:00', '11:00', '13:00', '16:00'] },
  { id: 3, name: 'Dr. Meera Singh', specialty: 'Pediatrics', days: 'Mon-Thu', times: ['09:30', '10:30', '11:30', '15:00'] }
];

function renderDoctorsTable(){
  const tbody = document.querySelector('#doctors-table tbody');
  if(!tbody) return;
  tbody.innerHTML = '';
  doctors.forEach(d => {
    const tr = document.createElement('tr');
    const timesText = d.times.length ? d.times.join(', ') : 'No slots';
    tr.innerHTML = `
      <td>${d.name}</td>
      <td>${d.specialty}</td>
      <td>${d.days}</td>
      <td>${timesText}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderDoctorsTable();
});
