// Javascript for Back to Top Button functionality
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the Back to Top Button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        console.log("Show Back to Top Button");
        backToTopButton.classList.add('visible');
    } else {
        console.log("Hide Back to Top Button");
        backToTopButton.classList.remove('visible');
    }
});

//smooth scroll to top when the button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu when the menu toggle button is clicked
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a navigation link is clicked
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});