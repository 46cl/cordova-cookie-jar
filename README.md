Fork of @davidlanger fork of assyme/cordova-cookie-jar

Sets the iOS Cookie Accept Policy to ```NSHTTPCookieAcceptPolicyAlways``` upon startup so that cookies from any domain can be accepted, instead of only cookies from the document domain with ```
NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain```.

# Cordova Cookie Jar

Your Phonegap / Cordova app needs more persistent cookie based sessions.

    <script src="cordova-cookie-jar/cordova-cookie-jar.js"><script>

    <script>

       // ... somewhere after cookies have been created
       plugins.cookieJar.storeCookiesForDomain("your-domain.com");

       // ... somewhere before you wish those cookies didn't disappear
       plugins.cookieJar.restoreCookiesForDomain("your-domain.com");

       // ... somewhere after those cookies are no good anymore
       plugins.cookieJar.emptyCookiesForDomain("your-domain.com");

    </script>
