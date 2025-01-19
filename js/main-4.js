/*sintaxe if-else:

    if(condição){

    }else if(condição 2){

    }else{

    }

    comparação:
    idêntico (===); -> verifica se são iguais e de tipos iguais.
    não idêntico (!==) -> verifica se são diferentes e de tipos diferentes.

*/ 

/*var ehTrue = null;

var ehTrue = prompt('é true ou não é??? (T/F)');

if (ehTrue == 'T') {
    document.write('estou dentro do bloco if (true/verdadeiro)');
} else {
    document.write('estou dentro do bloco else (false/falso)');
}*/

var nota1 = null;
var nota2 = null;
var media = null;
var faltas = null;

nota1 = prompt('Digite a primeira nota');
nota2 = prompt('Digite a segunda nota');
faltas = prompt('Digite o numero de faltas');

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
faltas = parseInt(faltas);

media = (nota1+nota2)/2;


if (media >= 5.0 && faltas <= 3){
    document.write('Aluno aprovado! :D');
}else if (media < 5.0 && media >= 3.0 && faltas <= 3){
    document.write('Aluno de recuperação! :|')
}else if (media >= 5.0 && faltas > 3) {
    document.write('Aluno reprovado! :(')
}else{
    document.write('Aluno reprovado! :|')
}
