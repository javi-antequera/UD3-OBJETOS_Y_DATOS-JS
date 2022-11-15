"use strict"
function ucFirst(str){
    let array= str.split("");
    let mayus="";
    array[0]=array[0].toUpperCase();
    for(let i=0;i<array.length;i++){
        mayus=mayus+array[i];
    }
    return mayus;
}
document.write(ucFirst("john"));