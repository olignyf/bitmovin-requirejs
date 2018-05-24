/////////////////////////
///  Main entry  ///
/////////////////////////
//
// Description:
//    Entry point of webapp
//
//////////////////////////////////////////////////////
var debug = true;
define(function (require) {

    // Modules that require instantiations
    var bitmovin = require('lib/bitmovin-player/bitmovinplayer');

    /// documentReady() ///
    // For HTML5 compliant browser, this is only needed if we put scripts in head.
    // If we put scripts after <body> in HTML5 compliant browser we are assured that when we are executed, prior elements are loaded.
    var documentReadyCalled = false;
    function documentReady()
    {
        if (documentReadyCalled) return;
        documentReadyCalled = true;

        if ( debug )
        {
            var t = new Date().getTime();
            diff = t - debugLastTimestamp;
            console.log("Main: document.ready at t="+t + " diff("+diff+")");
            debugLastTimestamp = t;
        }

        var conf = {
          key: "bf7c270f-b0ef-4511-882a-4bba3934690a",
          events: {
            onReady: function() {
            },
            onSourceLoaded: function() {
            },
            onPlay: function() {
            },
            onPlaying: function() {
            },
            onTimeChanged: function() {
            },
            onTimeShifted: function() {
            },
            onPaused: function() {
            }
          },
          source: {
            hls:"http://hlseastva1.dvr.haivision.com/ims/sales/dvrfile/playlist.m3u8",
            options: {   
              startTime: 0
            }
          },
          playback: {
            autoplay: false
          },
          style: {
            aspectratio: '16/9',
            ux: true,
            controls: true, 
            playOverlay:true
          },
          tweaks: {
          //  max_buffer_level: 20
          }
        };
        var player = bitmovin("bitmovin-player");
        
        player.setup(conf).then(function(playerInstance) {
          console.log('Successfully created Bitmovin Player instance');
          self.bitmovinPlayerSetup = true;
        }, function(reason) {
          console.log('Error while creating Bitmovin Player instance', reason);
        });
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


