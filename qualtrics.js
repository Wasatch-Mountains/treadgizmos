/**
 * Qualtrics Website Feedback Snippet
 * This script is loaded separately to keep the main index.html clean,
 * mimicking how a Tag Manager would inject the feedback tool.
 */
(function() {
    // 1. Create the placeholder div required by Qualtrics
    var qualtricsDiv = document.createElement('div');
    qualtricsDiv.id = 'ZN_RKA4Mw8J5fwBiaB';
    qualtricsDiv.innerHTML = '<!--DO NOT REMOVE-CONTENTS PLACED HERE-->';
    document.body.appendChild(qualtricsDiv);

    // 2. Qualtrics Loader Logic
    var g = function(g) {
        this.go = function() {
            var a = document.createElement("script");
            a.type = "text/javascript";
            a.src = g;
            document.body && document.body.appendChild(a);
        };
        this.start = function() {
            var t = this;
            if ("complete" !== document.readyState) {
                if (window.addEventListener) {
                    window.addEventListener("load", function() { t.go() }, false);
                } else if (window.attachEvent) {
                    window.attachEvent("onload", function() { t.go() });
                }
            } else {
                t.go();
            }
        };
    };

    try {
        (new g("https://znrka4mw8j5fwbiab-qdemo.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_RKA4Mw8J5fwBiaB")).start();
    } catch (i) {
        console.error("Qualtrics instance failed to start:", i);
    }
})();
