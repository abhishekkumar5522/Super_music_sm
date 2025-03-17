// Get references to the menu toggle button and nav links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add event listener to toggle the visibility of the nav links
menuToggle.addEventListener('click', function() {
  // Toggle the 'show' class to display or hide the menu
  navLinks.classList.toggle('show');
});
