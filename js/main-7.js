//propriedades de strings

//length
var cor = 'Vai Corinthians'

document.write(cor.length);

document.write('<br>');

//charAt(posição string)

document.write(cor.charAt(2));

document.write('<br>');

//indexOf(entre aspas, a letra que quero saber quando aparece ela pela primeira vez)

document.write(cor.indexOf('i'));

document.write('<br>');

//replace(pesquisa por cadeia de caract idêntica e substitui pela outra fornecida)

document.write(cor.replace('Corinthians', 'Comercial'));

document.write('<br>');

//substr([índice do caract que será o início do recorte], [número do índice do caract final do recorte])

document.write(cor.substring(4,15));

document.write('<br>');

//toLowerCase()

document.write(cor.toLowerCase(cor));

document.write('<br>');

//toUpperCase()

document.write(cor.toUpperCase(cor));

document.write('<br>');

