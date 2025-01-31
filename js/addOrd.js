var object = Array('Cadeira', 'Impressora', 'Garfo');

function recValue(Array) {

    var newObj = document.getElementById('textField').value;
    console.log(newObj);

    if(object.indexOf(newObj) !== -1){
        console.log('String já existente...');
        console.log(object);
    }else{
        object.push(newObj);
        console.log(object);
    }




}