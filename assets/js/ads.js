// Hide ad containers, reveal only after ads fill
document.querySelectorAll('.ad-container').forEach(function (c) {
	c.classList.add('ad-container--hidden');
	new MutationObserver(function (_, obs) {
		var ins = c.querySelector('ins.adsbygoogle');
		if (!ins || !ins.dataset.adStatus) return;
		if (ins.dataset.adStatus === 'filled') c.classList.remove('ad-container--hidden');
		obs.disconnect();
	}).observe(c, { attributes: true, subtree: true, attributeFilter: ['data-ad-status'] });
});
