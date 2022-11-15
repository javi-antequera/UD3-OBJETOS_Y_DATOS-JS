"use strict"
function randomInteger(min,max){
    let num= min +Math.random() * (max - min);
    return Math.round(num);
    //Mismo funcionamiento que el anterior pero redondeando a un entero con round
}
document.write(randomInteger(1,8));