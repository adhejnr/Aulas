var http = require('http');
var n = require('./mdl1');
var dia = require('./mdlDt');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b> Aula Node.js</b> <br>');
    res.write(n.nome()+'<br>');
    //res.writre(Date());
    res.write(dia.diaDaSemana()+'<br>');
    res.end("<center><h2> Olá, Boa tarde! </h2></center>");

}).listen(80);