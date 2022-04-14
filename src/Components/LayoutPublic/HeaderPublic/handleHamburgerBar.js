const handleHamburgerBar = () => {
	window.onload = () => {
		const hamburger = document.querySelector('.hamburger');
		const navBarLinks = document.querySelector('.nav-bar-links');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			navBarLinks.classList.toggle('active');
		});

		document.querySelectorAll('.nav-link').forEach(n =>
			n.addEventListener('click', () => {
				hamburger.classList.remove('active');
				navBarLinks.classList.remove('active');
			})
		);
	};
};

export default handleHamburgerBar;
