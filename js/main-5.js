var nome;
var alt = null;
var peso = null;
var IMC = null;
var altConv = null;
var classific;

nome = prompt('Digite seu nome: ');
parseFloat(alt = prompt('Digite sua altura em centímetros: '));
parseFloat(peso = prompt('Digite seu peso em quilos: '));

altConv = alt/100;        

IMC = peso/(altConv*altConv);    


if (IMC < 16.0) {
    classific = 'baixo peso muito grave';
}else if(IMC >= 16.0 && IMC < 17.0){
    classific = 'baixo peso grave';
}else if(IMC >= 17.0 && IMC < 18.5){
    classific = 'baixo peso';
}else if(IMC >= 18.5 && IMC < 25.0){
    classific = 'peso normal';
}else if(IMC >= 25.0 && IMC < 30.0){
    classific = 'sobrepeso';
}else if(IMC >= 30.0 && IMC < 35.0){
    classific = 'obesidade grau I';
}else if(IMC >= 35.0 && IMC < 40.0){
    classific = 'obesidade grau II';
}else if(IMC >= 40.0){
    classific = 'obesidade grau III';
}

document.write(nome + ' possui índice de massa corporal igual a ' + IMC + ', sendo classificado como ' + classific);
