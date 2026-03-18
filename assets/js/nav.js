(function() {
	var nav = document.getElementById('jump-nav');
	var toggle = nav.querySelector('.jump-nav__toggle');
	var links = nav.querySelector('.jump-nav__links');

	toggle.addEventListener('click', function() {
		var open = links.classList.toggle('jump-nav__links--open');
		toggle.setAttribute('aria-expanded', open);
	});

	// close menu when a link is tapped
	links.addEventListener('click', function(e) {
		if (e.target.tagName === 'A') {
			links.classList.remove('jump-nav__links--open');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});

	// detect when nav is stuck and go full-width
	var stick = document.createElement('div');
	nav.parentNode.insertBefore(stick, nav);
	new IntersectionObserver(function(entries) {
		nav.classList.toggle('jump-nav--stuck', !entries[0].isIntersecting);
	}).observe(stick);
})();
