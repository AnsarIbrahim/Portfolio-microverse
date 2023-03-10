const formGet = document.getElementById('form');
const emailGet = document.getElementById('email');
const errorGet = document.getElementById('error');

errorGet.style.display = 'none';

formGet.addEventListener('submit', (e) => {
  if (emailGet.value !== emailGet.value.toLowerCase()) {
    e.preventDefault();
    errorGet.style.display = 'block';
    errorGet.innerHTML = 'Error Please make Sure that your email is correct...!';
  }
});