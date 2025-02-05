let newWindow;

function openPopUp(){
    newWindow = window.open('https://www.pudim.com.br/', 'nova_janela', 'width=500', 'height=500');
}

function closePopUp(){
    newWindow.close();
}

function printPag(){
    window.print();
}