"use strict"
function readNumber(){
    let n=prompt("Introduce un valor numérico");
    if(n==""||n==null){
        console.log("No es un numero");
        return null;
    }else {
        while(isNaN(parseInt(n))){
            n=prompt("Introduce un valor numérico");
            if(n==""||n==null){
                console.log("No es un numero");
                return null;
            }
        }
        return n;
    }
}
alert(readNumber());