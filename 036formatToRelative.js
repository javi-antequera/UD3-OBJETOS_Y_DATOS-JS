"use strict"
function formatDate(date){
    //Recojo los valores de la fecha dada
    let dia = date.getDate();
    let mes = date.getMonth() + 1;//El mes mas 1 ya que empiezan en 0
    let año = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let diferencia = new Date() - date;//Diferencia entre la fecha dada y ahora mismo
    let diferenciaSegundos = Math.round(diferencia / 1000);//Convierte la diferencia a segundos
    let diferenciaMinutos = diferenciaSegundos / 60;//Convierte la diferencia a minutos
    let diferenciaHoras = diferenciaMinutos / 60;//Convierte la diferencia a horas

    //Formato para fecha completa
    año=año.toString().slice(-2);
    mes = mes < 10 ? '0' + mes : mes;
    dia = dia < 10 ? '0' + dia : dia;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    //Comprobaciones en funcion de la fecha dada
    if (diferenciaSegundos < 1) {
        return "ahora mismo";
      } else if (diferenciaMinutos < 1) {
        return "hace "+diferenciaSegundos+" seg.";
      } else if (diferenciaHoras < 1) {
        return "hace"+ diferenciaMinutos+ "min.";
      } else {
        return dia+"."+mes+"."+año+" "+ hora+":"+minutos;
      }
}
let date = new Date(2012, 0, 3,23,43);
alert(formatDate(date));