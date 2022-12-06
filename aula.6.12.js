var http = require('http');
var url = require('./mdl1');
var dia = require('./mdlDt');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "ano: " + q.year + "mês: " + q.month;
    res.end(txt);
}).listen(80);