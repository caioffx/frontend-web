var object = Array('cadeira', 'impressora', 'garfo');

function recValue(Array) {

    //cria uma variável newObj e atribui o valor digitado no campo de texto (resgatado pelo id html textField) a ela
    var newObj = document.getElementById('textField').value;
    console.log(newObj);


    if(newObj === ''){
        console.log('Informe um valor válido.');
    }else{
        //verifica se palavra já foi adicionada (case sensitive)
        if(object.indexOf(newObj) !== -1){
            console.log('String já existente...');
            console.log(object);
        }else{
            //adiciona newObj no final do array object
            object.push(newObj);
            console.log(object);

            //limpar o campo de texto
            document.getElementById('textField').value = '';
        }
    }


}

function orderValue(Array){
    //ordena array object em ordem alfanumérica e case sensitive (primeiro maiúsculas e depois minúsculas)
    object.sort();
    console.log(object);
}
