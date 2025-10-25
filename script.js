// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.menu-toggle');
	const navMenu = document.querySelector('.navbar-content-right');

	if (menuToggle && navMenu) {
		menuToggle.addEventListener('click', function () {
			this.classList.toggle('active');
			navMenu.classList.toggle('active');
		});

		// Close menu when clicking a link
		const navLinks = document.querySelectorAll('.navbar-content-right a');
		navLinks.forEach(link => {
			link.addEventListener('click', function () {
				menuToggle.classList.remove('active');
				navMenu.classList.remove('active');
			});
		});
	}
});