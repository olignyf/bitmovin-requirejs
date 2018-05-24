/////////////////////////
///  Main entry  ///
/////////////////////////
//
// Description:
//    Entry point of webapp
//
//////////////////////////////////////////////////////
var debug = true;
require(['lib/hls.min'], function(Hls) {

    // Modules that require instantiations

    /// documentReady() ///
    // For HTML5 compliant browser, this is only needed if we put scripts in head.
    // If we put scripts after <body> in HTML5 compliant browser we are assured that when we are executed, prior elements are loaded.
    var documentReadyCalled = false;
    function documentReady()
    {
        if (documentReadyCalled) return;
        documentReadyCalled = true;

        if (debug)
        {
            var t = new Date().getTime();
            diff = t - debugLastTimestamp;
            console.log("Main: document.ready at t="+t + " diff("+diff+")");
            debugLastTimestamp = t;
        }


        var domVideoEl = document.getElementById("player");
        if (Hls.isSupported()) 
        {
          var hls = new Hls();
          hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
          hls.attachMedia(domVideoEl);
          hls.on(Hls.Events.MANIFEST_PARSED,function() {
            domVideoEl.play();
          });
        }
    }

    function documentLoadedComplete()
    {
        document.removeEventListener("DOMContentLoaded", documentLoadedComplete, false);
        window.removeEventListener("load", documentLoadedComplete, false);
        documentReady();
    }

    if (document.readyState === "complete")
    {	// launch now
        setTimeout(documentReady);
    }
    else
    {	document.addEventListener("DOMContentLoaded", documentLoadedComplete, false);
        window.addEventListener("load", documentLoadedComplete, false); // fallback
    }

    if ( debug )
    {
        var t = new Date().getTime();
        debugLastTimestamp = t;
        console.log("Main: started at t="+t);
    }

    return { amd:true }; // returning for QUnit testing purposes
});


