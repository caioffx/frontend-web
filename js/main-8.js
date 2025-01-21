//arredonda para cima

var x = Math.ceil(10.380);
document.write(x+'<br>');

//arredonda para baixo 

var y = Math.floor(10.380);
document.write(y+'<br>')

//arredonda considerando o valor correto considerando a primeira casa após a vírgula
var z = Math.round(10.380);
var w = Math.round(10.580);
document.write(z+'<br>'+w+'<br>');

//random gera um número aleatório entre 0 e 1
var r = Math.random();
document.write(r*100);