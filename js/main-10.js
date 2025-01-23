function acao1() {
    alert('elemento clicado');
}

function acao2() {
    alert('elemento clicado duas vezes');
}

function acao3() {
    alert('o cursor do mouse deixou a região do elemento');
}

function acao4() {
    alert('o cursor do mouse entrou na região do elemento');
}

function acao5() {
    alert('a tecla foi pressionada');
}

console.log(document.getElementById('nome_usuario'));

function distribuiCaractere() {
    //selecionar o valor digitado e atribuir o valor digitado a uma variável
    var caractere = document.getElementById('entrada').value;

    //limpar o campo de digitação
    document.getElementById('entrada').value = '';

    //limpar espaços em branco antes e após o final da string digitada
    caractere.trim();

    //logica para definir se é número ou letra
    switch (caractere) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':    
        case '6':
        case '7':
        case '8':
        case '9':  
            //adicionar caractere no campo de números
            document.getElementById('numeros').value += caractere;
            break;
    
        default:
            document.getElementById('letras').value += caractere;
            break;
    }
}