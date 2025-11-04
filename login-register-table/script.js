const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

tabRegister.addEventListener('click', () => {
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

document.getElementById('btn-login').addEventListener('click', () => {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  const msg = document.getElementById('login-msg');
  if(!email || !pass) { msg.textContent = 'Email və şifrə boş ola bilməz.'; return; }
  msg.style.color = 'green';
  msg.textContent = 'Login uğurludur (demo).';
});

document.getElementById('btn-register').addEventListener('click', () => {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value.trim();
  const msg = document.getElementById('reg-msg');
  if(!name || !email || !pass) { msg.textContent = 'Bütün xanalari doldurun.'; return; }
  msg.style.color = 'green';
  msg.textContent = 'Qeydiyyat uğurludur (demo).';
});