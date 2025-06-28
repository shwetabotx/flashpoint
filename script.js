document.addEventListener('DOMContentLoaded', function () {
  // Animate hero text on load
  const heroText = document.querySelector('.hero-content');
  if (heroText) {
    setTimeout(() => {
      heroText.classList.add('visible');
    }, 100); // slight delay
  }

  

  // Replace form submission with mailto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submit

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      const subject = encodeURIComponent('New Client Enquiry');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
      );

      const mailtoLink = `mailto:fpfsolution@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      // Optional: Reset the form
      contactForm.reset();
    });
  }

  // Modals for "Learn More" links
  const learnMoreLinks = document.querySelectorAll('.learn-more');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.modal .close');

  learnMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });

  closes.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
