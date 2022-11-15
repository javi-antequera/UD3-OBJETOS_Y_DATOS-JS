"use strict"
function getWeekDay(date){
    //array con todos los dias de la semana
    let dias=["MO","TU","WE","TH","FR","SA","SU"];
    //Obtengo el dia y busco la posicion en mi array
    let diaSem=dias[date.getDay()-1];
    return diaSem;
}
let date = new Date(2012,0,3);  // 3 Jan 2012
alert(getWeekDay(date));// debería mostrar "TU"