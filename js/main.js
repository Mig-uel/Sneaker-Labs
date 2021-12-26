import { fetchJordans } from './fetchJordan'

const jordan = document.getElementById('jordan');
const nike = document.getElementById('nike');
const yeezy = document.getElementById('yeezy');

jordan.addEventListener('click', () => {
  fetchJordans();
})