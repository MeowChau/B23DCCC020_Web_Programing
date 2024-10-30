var http = require('http');

var sever = http.createServer(function(req, res) {
    res.end("Hello World");
});

Server.listen(3000,function () {
    console.log("Sever listening on http://localhost:3000")
})