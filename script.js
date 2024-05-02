document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const toggleFormButton = document.getElementById('toggle-form');

  toggleFormButton.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Perform login logic here
    console.log(Logging in with email: ${email});
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;

    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Perform signup logic here
    console.log(Signing up with username: ${username}, email: ${email});
  });
});