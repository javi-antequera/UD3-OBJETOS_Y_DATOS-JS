"use strict"
function isEmpty(objeto){
    if(Object.keys(objeto).length===0){
        return true;
    }else{
        return false;
    }
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false