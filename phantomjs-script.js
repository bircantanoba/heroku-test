var system = require('system');

var page = require('webpage').create();
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 oneMARS/1.0";
page.settings.localToRemoteUrlAccessEnabled = true;

page.open(system.args[1], function (status) {
    if (status !== "success") {
        console.log("Unable to access network");
        //process.stderr.write("Unable to access network");
        phantom.exit();
    }
    else {
        page.evaluate(function () {

            var baseMeta = document.createElement('base');
            baseMeta.href = location.origin;
            document.getElementsByTagName('head')[0].appendChild(baseMeta);
        });
        console.log(page.title);
        page.close();
        phantom.exit();
    }
});