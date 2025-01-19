/*sintaxe if-else:

    if(condição){

    }else if(condição 2){

    }else{

    }

    comparação:
    idêntico (===);
    não idêntico (!==).

*/ 

var ehTrue = null;

var ehTrue = prompt('é true ou não é??? (T/F)');

if (ehTrue == 'T') {
    document.write('estou dentro do bloco if (true/verdadeiro)');
} else {
    document.write('estou dentro do bloco else (false/falso)');
}