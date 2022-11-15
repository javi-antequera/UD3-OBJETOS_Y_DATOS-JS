"use strict"
function getLastDayOfMonth(year,month) {
    //creo un objeto fecha con el año, el mes siguiente al dado, y el día 0.
    //Ya que el mes empieza el dia 1, me va a dar el último día del anterior mes, que es lo que buscamos.
    let anterior= new Date(year, month+1,0);
    let dia= anterior.getDate();
    return dia;    
}
alert( getLastDayOfMonth(2012, 1) ); // 29 (febrero, año bisiesto).
alert( getLastDayOfMonth(2018, 5) );