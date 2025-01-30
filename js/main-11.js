//declarando a variável do tipo array lista_coisas, que conterá diversas listas utilizando a função Array()

var lista_coisas = Array();

//declarando a posição 0 da lista_coisas e inserindo diversas frutas, separadas por vírgulas, nas posições do array [0][0], [0][1], [0][2], [0][3] 

lista_coisas[0] = Array('Banana', 'Maçã','Manga','Pera');


//outra forma de declarar um array, agora na posição 1 da lista_coisas e inserindo diversas pessoas

lista_coisas[1] = [];

//definindo, a cada posição do array, qual será a pessoa nos índices [1][0], [1][1], [1][2], [1][3]

lista_coisas[1][0] = 'Bernardo';
lista_coisas[1][1] = 'Vicente';
lista_coisas[1][2] = 'Francisco';
lista_coisas[1][3] = 'Valentim';

//outra forma de declarar um array, agora criando uma posição de string da lista_coisas e inserindo diversas frutas, separadas por vírgulas, nos índices de cada ['frutas'][0], ['frutas'][1], ['frutas'][2], ['frutas'][3], 

lista_coisas['frutas'] = Array('Laranja', 'Toranja','Melancia','Uva');

//outra forma de declarar um array, agora criando uma posição de string da lista_coisas e inserindo diversas pessoas nos índices de cada ['pessoas'][0], ['pessoas'][1], ['pessoas'][2], ['pessoas'][3], 

lista_coisas['pessoas'] = [];

lista_coisas['pessoas'][0] = 'Catarina';
lista_coisas['pessoas'][1] = 'Tereza';
lista_coisas['pessoas'][2] = 'Fátima';
lista_coisas['pessoas'][3] = 'Café';

//é possível mostrar na tela itens específicos da lista, ou mesmo criar uma lógica para mostrar determinado item com base em alguma ideia de negócio. 

document.write(lista_coisas['pessoas'][3],' e ', lista_coisas[0][3]);

//para incluir elemento no início do array (irá criar uma nova posição, no índice seguinte ao até então último índice, mover o elemento do até então índice final (agora penúltimo índice) e fazer isso com todos os outros para a posição 0 ficar vaga e preenche-la com o elemento a ser incluído)

lista_coisas[0].unshift('Limão');

//para excluir elemento no início do array

lista_coisas[1].shift();

//para incluir elemento no final do array (irá criar uma nova posição, no índice seguinte ao até então último índice)

lista_coisas['pessoas'].push('Mel');

//para excluir elemento no final do array

lista_coisas['frutas'].pop();


console.log(lista_coisas);
