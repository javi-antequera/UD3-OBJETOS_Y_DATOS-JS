"use strict"
function getLocalDay(date){
    let dia=date.getDay();
    //Como en paises europeos van desde el 1 al 7, si dia es 0 lo pasamos a 7
    if (dia == 0) {
        dia = 7;
        return dia;
      }else{
        return dia;
      }    
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) ); // tuesday, should show 2