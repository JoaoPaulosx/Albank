const card = document.getElementById('card');
const toRegisterBtn = document.getElementById('to-register');
const toLoginBtn = document.getElementById('to-login');

toRegisterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  card.classList.add('is-flipped');
});

toLoginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  card.classList.remove('is-flipped');
});