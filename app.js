const express = require("express"),
    app = express();

const path = require('path');
const childProcess = require('child_process');
const phantomjs = require('phantomjs-prebuilt');
const binPath = phantomjs.path;

let childArgs = [
    path.join(__dirname, 'phantomjs-script.js'),
    'some other argument (passed to phantomjs script)'
]

app.get("/", (req, res, next) => {
    if (req.query.url) {
        childArgs.push(req.query.url);
        childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
            // handle results
            res.send(stdout);
        });
    } else {
        res.send("invalid url");
    }

});

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'), () => {
    console.log("server listened " + app.get('port') + " port");
});