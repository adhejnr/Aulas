var fs = require ('fs');

fs.appendFile('novo Arquivo.txt', 'Arquivo criado com sucesso', function (err) {
if (err) throw err;
console.log('Arquivo criado...');
});