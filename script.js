const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', () => {
  const usernameInput = document.querySelector('#usernameInput');
  const passwordInput = document.querySelector('#passwordInput');

  if (usernameInput.value === 'User') {
    usernameInput.classList.remove('wrong-value');
  } else {
    usernameInput.classList.add('wrong-value');
  }

  if (passwordInput.value === '12345678') {
    passwordInput.classList.remove('wrong-value');
  } else {
    passwordInput.classList.add('wrong-value');
  }

  if (passwordInput.value === '12345678' && usernameInput.value === 'User') {
    window.location.assign('./menu.html');
  }
});