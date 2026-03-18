(function() {
	var nav = document.getElementById('jump-nav');
	var spacer = document.getElementById('jump-nav-spacer');
	var navH = nav.offsetHeight;
	var stickyPoint = nav.offsetTop + nav.offsetParent.offsetTop;

	window.addEventListener('scroll', function() {
		if (window.scrollY >= stickyPoint) {
			nav.classList.add('jump-nav--stuck');
			spacer.style.height = navH + 'px';
		} else {
			nav.classList.remove('jump-nav--stuck');
			spacer.style.height = '0';
		}
	});

	var toggle = nav.querySelector('.jump-nav__toggle');
	var links = nav.querySelector('.jump-nav__links');
	toggle.addEventListener('click', function() {
		var open = links.classList.toggle('jump-nav__links--open');
		toggle.setAttribute('aria-expanded', open);
		// recalc spacer height when menu opens/closes while stuck
		if (nav.classList.contains('jump-nav--stuck')) {
			spacer.style.height = nav.offsetHeight + 'px';
		}
	});

	// close menu when a link is tapped
	links.addEventListener('click', function(e) {
		if (e.target.tagName === 'A') {
			links.classList.remove('jump-nav__links--open');
			toggle.setAttribute('aria-expanded', 'false');
			if (nav.classList.contains('jump-nav--stuck')) {
				spacer.style.height = nav.offsetHeight + 'px';
			}
		}
	});
})();
