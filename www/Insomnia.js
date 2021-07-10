var exec = require('cordova/exec');

var Insomnia = {
    keepAwake: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
    },
    allowSleepAgain: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
    }
};

module.exports = Insomnia;
