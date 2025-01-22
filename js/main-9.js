//15/01/2017

var data1 = new Date(2017, 0, 15);

//21/01/2025

var data2 = new Date(2025, 0, 21); 

document.write(data1.toString());
document.write('<hr>');
document.write(data2.toString());
document.write('<hr>');
document.write('<br>');

document.write(data1.getTime());
document.write('<hr>');
document.write(data2.getTime());
document.write('<hr>');


var difMilissegs = data2.getTime() - data1.getTime();

var difDias = difMilissegs/(1*24*60*60*1000);

document.write(Math.ceil(difDias));
