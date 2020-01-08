const glassKey = "mozilla_addon_plexiglass_glass_on";
const tintKey = "mozilla_addon_plexiglass_tint_on";
let glassCookie, tintCookie, glass, tint;

function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

function syncGlassOptions(tabs) {
    glassCookie = browser.cookies.get({
        url: tabs[0].url,
        name: glassKey
    }).then((cookie) => {
        if(cookie.value === "true"){
            document.getElementById("glass-on").checked = true;
            glass = true;
        }
        else{
            document.getElementById("glass-off").checked = true;
            glass = false;
            browser.cookies.set({
                url: tabs[0].url,
                value: JSON.stringify(false),
                name: glassKey
            });
        }
    }).catch((err) => {
        document.getElementById("glass-off").checked = true;
        browser.cookies.set({
            url: tabs[0].url,
            value: JSON.stringify(false),
            name: glassKey
        });
        glass = false;
    });

    tintCookie = browser.cookies.get({
        url: tabs[0].url,
        name: tintKey
    }).then((cookie) => {
        if(cookie.value === "true"){
            document.getElementById("tint-on").checked = true;
            tint = true;
        }
        else{
            document.getElementById("tint-off").checked = true;
            tint = false;
            browser.cookies.set({
                url: tabs[0].url,
                value: JSON.stringify(false),
                name: tintKey
            });
        }
    }).catch((err) => {
        document.getElementById("tint-off").checked = true;
        browser.cookies.set({
            url: tabs[0].url,
            value: JSON.stringify(false),
            name: tintKey
        });
        tint = false;
    });

    Promise.all([tintCookie, glassCookie]).then(() => {
        installGlass(tabs);
    })

}

/**
 * send a "install_glass" message to the content script in the active tab.
 */
function installGlass(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        command: "install_glass",
        tint: tint,
        glass: glass
    });
}

/**
* Listen for clicks on the radio buttons, and send the appropriate message to
* the content script in the page.
*/
function listenForClicks() {
    document.addEventListener("click", (e) => {
        glass = document.getElementById("glass-on").checked;
        tint = document.getElementById("tint-on").checked;

        function setCookies(tabs){
            browser.cookies.set({
                url: tabs[0].url,
                value: JSON.stringify(glass),
                name: glassKey
            })
            browser.cookies.set({
                url: tabs[0].url,
                value: JSON.stringify(tint),
                name: tintKey
            });
            return tabs;
        }

        /**
        * Just log the error to the console.
        */
        function reportError(error) {
            console.error(`Could not install plexiglass: ${error}`);
        }

        // /**
        // * Get the active tab,
        // * then call "installGlass()" as appropriate.
        // */
        getActiveTab().then(setCookies).then(installGlass).catch(reportError);
    });

}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute beastify content script: ${error.message}`);
}


/**
* When the popup loads, inject a content script into the active tab,
* and add a click handler.
* If we couldn't inject the script, handle the error.
*/
browser.tabs.executeScript({file: "/content_scripts/plexiglass.js"})
    .then(getActiveTab)
    .then(syncGlassOptions)
    .then(listenForClicks)
    .catch(reportExecuteScriptError);