chrome.storage.local.get(['glassOn', 'overlayOn'], function(options) {
	if (options.overlayOn === true) {
		// create new div element
		const overlay = document.createElement('div');
		overlay.setAttribute('id', 'plexiglass-overlay');
		overlay.setAttribute('aria-hidden', true);

		// element styles - sets an invisible layer on top of the page.
		overlay.setAttribute(
			'style',
			`
              content: "";
              display: block;
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              z-index: 99999;
              background-color: rgba(0,0,0,1);
          `
		);
		if (!document.getElementById('plexiglass-overlay')) {
			document.body.appendChild(overlay);
		}
	} else {
		if (document.getElementById('plexiglass-overlay')) {
			document.getElementById('plexiglass-overlay').remove();
		}
	}
	if (options.glassOn === true) {
		document.body.style.pointerEvents = 'none';
	} else {
		document.body.style.pointerEvents = 'initial';
	}
});
