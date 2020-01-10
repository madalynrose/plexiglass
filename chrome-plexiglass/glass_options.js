function syncPlexiglassOptionsFromStorage() {
	chrome.storage.local.get(['glassOn', 'overlayOn'], function(options) {
		let { glassOn, overlayOn } = options;
		if (glassOn === true) {
			document.getElementById('glass-on').checked = true;
		} else {
			document.getElementById('glass-off').checked = true;
		}
		if (overlayOn === true) {
			document.getElementById('overlay-on').checked = true;
		} else {
			document.getElementById('overlay-off').checked = true;
		}
	});
}

function syncPlexiglassOptionsToStorage() {
	const glassOn = document.getElementById('glass-on').checked === true;
	const overlayOn = document.getElementById('overlay-on').checked === true;
	chrome.storage.local.set({ overlayOn, glassOn });
}

function executeContentScript() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
			file: 'content_script.js',
		});
	});
}

syncPlexiglassOptionsFromStorage();
executeContentScript();

document.getElementById('popup-content').onclick = function(event) {
	const { name } = event.target;
	switch (name) {
		case 'glass':
		case 'overlay':
			syncPlexiglassOptionsToStorage();
			executeContentScript();
			break;
		default:
			break;
	}
};
