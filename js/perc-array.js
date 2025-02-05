//declarando a variável do tipo array lista_coisas, que conterá diversas listas utilizando a função Array()

let lista_coisas = Array();

lista_coisas[0] = 'Cadeira'
lista_coisas[1] = 'Limão'
lista_coisas[2] = 'Isqueiro'
lista_coisas[3] = 'Postit'
lista_coisas[4] = 'Pote'
lista_coisas[5] = 'zippo'
lista_coisas[6] = 'Caneca'
lista_coisas[7] = 'Cubo'

for (let i = 0; i < lista_coisas.length; i++) {
    const element = lista_coisas[i];
    console.log(element);
    document.write(lista_coisas[i]+' '+'<br>');
}

document.write('<br>');
document.write('<hr>');

for (let i = 1; i<=10; i++) {
    for(let j = 1; j<=10; j++){
        let tab = i*j;
        document.write(i+'*'+j+'='+tab+'<br>');
    }
    document.write('<br>');
    document.write('<hr>');
}