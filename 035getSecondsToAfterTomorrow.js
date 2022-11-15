"use strict"
function getSecondsToAfterTomorrow(){
    let ahora= new Date();//Date con el momento de llamar la funcion
    let hora= ahora.getHours();//Obtener horas, minutos y segundos del momento
    let minutos=ahora.getMinutes();
    let segundos=ahora.getSeconds(); 
    let segundosHoy=(hora*60+minutos) * 60+segundos;//Segundos que ya han transcurrido hoy
    let segundosEnUnDia=24*60*60;//Segundos que tiene un dia
    let segundosParaMañana=segundosEnUnDia-segundosHoy;//Obtengo los segundos que quedan para mañana.
    let segundosParaPasadoMañana=segundosParaMañana+segundosEnUnDia;//Sumo un dia en segundos para obtener los que quedan hasta pasado mañana
    
    return segundosParaPasadoMañana;
}
alert(getSecondsToAfterTomorrow());