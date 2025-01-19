/*alert('Olá mundo!');
document.getElementById('nome0').value = 'Oi';*/

//Tipos de variáveis

//string
var nome0 = 'Jô';

//numero inteiro
var numeroInteiro = 77;

//numero fracionado (flutuante)
var numeroFracionado = 77.77;

//boolean
var varBool = false;

//alert() -> abre o dialog
//alert(nome0) //recurso bom para debug, ou seja, no momento de executar o teste do código

//document.write ('document' é um elemento que representa o "DOM": todos os elementos HTML criados na página estão contidos dentro do objeto 'document')
document.write(nome0);
console.log(numeroFracionado);

//concatenar strings ou variáveis: 
document.write('<h1>Olá ',nome0,', tudo bem? Vejo aqui que você possui a camisa número ',numeroInteiro,'.</h1>');

//concatenar strings ou variáveis solicitando que usuário digite seu nome e e-mail com o comando "prompt()"

var nome1 = prompt('Digite aqui seu nome: ');

document.write('<h1>Olá ',nome1,', tudo bem? Vejo aqui que você possui a camisa número ',numeroInteiro,'.</h1>');