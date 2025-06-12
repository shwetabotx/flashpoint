// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Animate hero text on load
  const heroText = document.querySelector('.hero-content');
  if (heroText) {
    setTimeout(() => {
      heroText.classList.add('visible');
    }, 100); // slight delay
  }

  // Toggle mobile navigation
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('header nav ul');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Basic form validation on submit
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
      } else {
        alert('Thank you for contacting us, ' + name + '!');
        contactForm.reset();
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const learnMoreLinks = document.querySelectorAll('.learn-more');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.modal .close');

  learnMoreLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modalId = link.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });

  closes.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });

  // Close modal on outside click
  window.addEventListener('click', e => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

