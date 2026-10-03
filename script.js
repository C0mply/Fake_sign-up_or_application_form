const garlic = document.getElementById('garlic');
const garlicValue = document.getElementById('garlic-value');
const cape = document.getElementById('cape');
const capeValue = document.getElementById('cape-value');
const arrival = document.getElementById('arrival');
const form = document.getElementById('guest-list');

garlic.addEventListener('input', () => {
  garlicValue.value = `${garlic.value} / 10`;
});

cape.addEventListener('input', () => {
  capeValue.textContent = cape.value;
});

function validateArrival() {
  const hour = arrival.value ? Number(arrival.value.slice(11, 13)) : null;
  arrival.setCustomValidity(hour !== null && hour >= 6 && hour < 20
    ? 'The club opens after sunset. Choose a time from 20:00 to 05:59, castle time.'
    : '');
}

arrival.addEventListener('input', validateArrival);
validateArrival();

// Native HTML submission remains responsible for GET/POST, destinations, and files.
form.addEventListener('submit', event => {
  const button = event.submitter;
  const method = (button?.getAttribute('formmethod') || form.method).toUpperCase();
  document.getElementById('submit-status').textContent = `Opening the ${method} demo response in a new tab…`;
});
