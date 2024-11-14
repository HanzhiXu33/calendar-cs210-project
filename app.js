import Calendar from './components/Calendar.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('calendar-root');
  root.innerHTML = Calendar();
});
