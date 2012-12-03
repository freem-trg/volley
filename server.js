var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("some data");
}).listen(process.env.PORT);