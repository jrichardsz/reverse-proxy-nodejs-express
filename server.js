//https://codeforgeek.com/2015/12/reverse-proxy-using-expressjs/

var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3000',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3002';
 
app.all("*", function(req, res) {
    console.log('redirecting to Server1:'+req.url);
    apiProxy.web(req, res, {target: serverOne});
});

/*app.all("/app1/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});*/

app.listen(8085);
