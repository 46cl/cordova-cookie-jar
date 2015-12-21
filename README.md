Fork of [@davidlanger](https://github.com/davidlanger/cordova-cookie-jar) fork of [assembly/cordova-cookie-jar](https://github.com/assyme/cordova-cookie-jar)

This forks sets the iOS Cookie Accept Policy to ```NSHTTPCookieAcceptPolicyAlways``` upon startup so that cookies from any domain can be accepted, instead of only cookies from the document domain with ```NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain```.

# Cordova Cookie Jar

Your Phonegap / Cordova app needs more persistent cookie based sessions.

    <script src="cordova-cookie-jar/cordova-cookie-jar.js"><script>

    <script>
       // ... somewhere after cookies have been created
       CDVCookieJar.storeCookiesForDomain("your-domain.com");

       // ... somewhere before you wish those cookies didn't disappear
       CDVCookieJar.restoreCookiesForDomain("your-domain.com");

       // ... somewhere after those cookies are no good anymore
       CDVCookieJar.emptyCookiesForDomain("your-domain.com");
    </script>
