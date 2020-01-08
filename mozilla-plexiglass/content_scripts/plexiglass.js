(function() {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
 

  
    /**
     * remove all existing glass then
     * add tint overlay if tint is true
     * and remove mouse feedback if glass is true
     */
    function installGlass(tint, glass) {
        if(tint){
            // create new div element
            const tint = document.createElement('div');
            tint.setAttribute('id', 'plexiglass-tint');
            tint.setAttribute('aria-hidden', true);
            
            // element styles - sets an invisible layer on top of the page.
            tint.setAttribute('style', `
                content: "";
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 99999;
                background-color: rgba(0,0,0,1);
            `);
            if(!document.getElementById('plexiglass-tint')){
                document.body.appendChild(tint);
            }
        }
        else {
            if(document.getElementById('plexiglass-tint')){
                document.getElementById('plexiglass-tint').remove()
            } 
        }
        if(glass){
            document.body.style.pointerEvents = "none";
        }
        else {
            document.body.style.pointerEvents = "initial";
        }
      }

  
    /**
     * Listen for messages from the background script.
     * Call "installGlass()"
    */
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "install_glass") {
        installGlass(message.tint, message.glass);
      }
    });
  
  })();