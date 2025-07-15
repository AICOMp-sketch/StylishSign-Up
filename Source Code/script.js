// Select forms and switch links
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const switchLinks = document.querySelectorAll('.switch');

// Function to toggle forms
function toggleForms(e) {
  e.preventDefault();
  if (e.target.closest('.sign-in-form')) {
    // Switch to Sign Up
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
  } else {
    // Switch to Sign In
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
  }
}

// Initialize - show Sign In by default
signInForm.classList.add('active');

// Attach event listeners
switchLinks.forEach(link => {
  link.addEventListener('click', toggleForms);
});

// Optional: Handle form submissions
document.querySelector('.sign-in-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signed In! (Functionality to be implemented)');
});

document.querySelector('.sign-up-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signed Up! (Functionality to be implemented)');
});