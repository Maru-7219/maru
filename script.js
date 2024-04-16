




document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  


















// Hamburger Menu Functionality
document.getElementById('toggleMenu').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
});

// Define scrollPosition variable
var scrollPosition;

// Update scrollPosition variable on scroll event
window.addEventListener('scroll', function() {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Add your scroll-related code here...
});


// Close menu when clicking outside of it
document.body.addEventListener('click', function(event) {
    var nav = document.querySelector('nav ul');
    if (!nav.contains(event.target) && event.target !== document.getElementById('toggleMenu')) {
        nav.classList.remove('open');
    }
});










// Smooth scrolling to section when clicking on navigation links
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        var targetId = this.getAttribute('href').substring(1); // Get the target section ID
        var targetSection = document.getElementById(targetId); // Get the target section element
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
    });
});





document.addEventListener('DOMContentLoaded', function() {
    var scrollButtons = document.querySelectorAll('.scroll-to-contact');
  
    scrollButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  