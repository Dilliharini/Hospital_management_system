const doctors = [
  { id: 1, name: 'Dr. Asha Rao', specialty: 'Cardiology', days: 'Mon-Fri', times: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
  { id: 2, name: 'Dr. Ravi Kumar', specialty: 'Orthopedics', days: 'Tue-Sat', times: ['10:00', '11:00', '13:00', '16:00'] },
  { id: 3, name: 'Dr. Meera Singh', specialty: 'Pediatrics', days: 'Mon-Thu', times: ['09:30', '10:30', '11:30', '15:00'] }
];

const appointments = [];

function $(sel){return document.querySelector(sel)}

function populateDoctorSelect(){
  const sel = $('#doctor');
  sel.innerHTML = '';
  doctors.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `${d.name} — ${d.specialty}`;
    sel.appendChild(opt);
  });
}

function showMessage(msg, cls=''){
  const m = $('#messages');
  m.textContent = msg;
  m.style.color = cls === 'error' ? 'crimson' : 'green';
}

function renderAppointments(){
  const list = $('#appointments-list');
  list.innerHTML = '';
  appointments.forEach(a => {
    const d = doctors.find(x => x.id === a.doctorId) || {name:'Unknown'};
    const li = document.createElement('li');
    li.textContent = `${a.date} ${a.time} — ${d.name} (${d.specialty})`;
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateDoctorSelect();
  renderAppointments();

  $('#booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const doctorId = Number($('#doctor').value);
    const date = $('#date').value;
    const time = $('#time').value;
    if(!doctorId || !date || !time){ showMessage('Please fill all fields', 'error'); return; }

    const doc = doctors.find(d => d.id === doctorId);
    if(!doc){ showMessage('Selected doctor not found', 'error'); return; }

    if(!doc.times.includes(time)){
      showMessage('Selected time is not available for this doctor. Choose a listed time.', 'error');
      return;
    }

    // Book: remove time slot and add appointment
    doc.times = doc.times.filter(t => t !== time);
    appointments.push({ doctorId, date, time });

    renderAppointments();
    showMessage('Appointment booked successfully');
    $('#booking-form').reset();
  });
});
