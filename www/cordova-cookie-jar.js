var exec = require('cordova/exec');

var CDVCookieJar = function () {};

CDVCookieJar.storeCookiesForDomain = function(domain) {
  exec(null, null, "CDVCookieJar", "storeCookiesForDomain", [domain]);
};

CDVCookieJar.restoreCookiesForDomain = function(domain) {
  exec(null, null, "CDVCookieJar", "restoreCookiesForDomain", [domain]);
};

CDVCookieJar.emptyCookiesForDomain = function(domain) {
  exec(null, null, "CDVCookieJar", "emptyCookiesForDomain", [domain]);
};

module.exports = CDVCookieJar;
