http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'}) //isso mostra pro bagulho lá que isso vai ser um html
    res.end('<center><h2>Boa tarde!</h2></center>');
}).listen(80);