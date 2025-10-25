// Mobile menu toggle
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.querySelector('.menu-toggle');
	const navMenu = document.querySelector('.navbar-content-right');
	const navbar = document.querySelector('.navbar');
	
	if (menuToggle && navMenu) {
		// Toggle menu on button click
		menuToggle.addEventListener('click', function(e) {
			e.stopPropagation(); // Prevent this from triggering document click
			this.classList.toggle('active');
			navMenu.classList.toggle('active');
		});
		
		// Close menu when clicking a link
		const navLinks = document.querySelectorAll('.navbar-content-right a');
		navLinks.forEach(link => {
			link.addEventListener('click', function() {
				menuToggle.classList.remove('active');
				navMenu.classList.remove('active');
			});
		});
		
		// Close menu when clicking outside
		document.addEventListener('click', function(e) {
			// Check if click is outside navbar and menu is open
			if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
				menuToggle.classList.remove('active');
				navMenu.classList.remove('active');
			}
		});
		
		// Prevent clicks inside the menu from closing it
		navMenu.addEventListener('click', function(e) {
			e.stopPropagation();
		});
	}
});