	(function() {
		function collapse(header) {
			var body = header.nextElementSibling;
			var arrow = header.querySelector('.section-arrow');
			header.classList.add('collapsed');
			body.setAttribute('hidden', 'until-found');
			arrow.textContent = '\u25BC';
		}

		function expand(header) {
			var body = header.nextElementSibling;
			var arrow = header.querySelector('.section-arrow');
			header.classList.remove('collapsed');
			body.removeAttribute('hidden');
			arrow.textContent = '\u25B2';
		}

		function toggle(header) {
			if (header.classList.contains('collapsed')) expand(header);
			else collapse(header);
		}

		// wrap each section's content in a collapsible header + body
		document.querySelectorAll('.content-block:not(.atf):not(.footer)').forEach(function(section) {
			var heading = section.querySelector('.title--large');
			if (!heading) return;

			// build clickable header row: [heading] [arrow >>>]
			var header = document.createElement('div');
			header.className = 'section-header collapsed';
			heading.parentNode.insertBefore(header, heading);
			header.appendChild(heading);
			header.insertAdjacentHTML('beforeend', '<span class="section-arrow">\u25BC</span>');

			// scoop remaining siblings into a hidden body wrapper
			var body = document.createElement('div');
			body.className = 'section-body';
			body.setAttribute('hidden', 'until-found');
			while (header.nextSibling) body.appendChild(header.nextSibling);
			section.appendChild(body);

			// auto-expand when browser find-in-page matches inside
			body.addEventListener('beforematch', function() { expand(header); });

			header.addEventListener('click', function() { toggle(header); });

			// affixes section starts expanded
			if (section.id === 'affixes-div') expand(header);
		});

		// expose for inline onclick use
		window.expandSection = function(id) {
			var el = document.getElementById(id);
			if (!el) return;
			var section = el.closest('.content-block');
			if (section) expand(section.querySelector('.section-header'));
		};

		// nav links expand their target section before scrolling
		document.querySelectorAll('.jump-nav a').forEach(function(link) {
			link.addEventListener('click', function() {
				var target = document.getElementById(this.getAttribute('href').slice(1));
				if (!target) return;
				var section = target.closest('.content-block');
				if (section) expand(section.querySelector('.section-header'));
			});
		});
	})();