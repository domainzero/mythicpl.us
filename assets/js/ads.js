// Dynamically load AdSense library and initialize all ad slots
(function () {
	var s = document.createElement('script');
	s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3384026795558381';
	s.crossOrigin = 'anonymous';
	document.head.appendChild(s);

	s.onload = function () {
		var ads = document.querySelectorAll('ins.adsbygoogle');
		for (var i = 0; i < ads.length; i++) {
			(adsbygoogle = window.adsbygoogle || []).push({});
		}
	};
})();
