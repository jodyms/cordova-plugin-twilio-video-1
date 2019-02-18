var exec = require('cordova/exec');

var TwilioVideo = function() {};

TwilioVideo.open = function(token, room, eventCallback, config) {
    config = config != null ? config : null;
    exec(function(e) {
        console.log("Twilio video event fired: " + e);
        if (eventCallback) {
            eventCallback(e);
        }
    }, null, 'TwilioVideoPlugin', 'open', [token, room, config]);
};

module.exports = TwilioVideo;
