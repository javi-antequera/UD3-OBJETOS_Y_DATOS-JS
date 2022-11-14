"use strict"
let thor = "Thor es el hijo de Odín";
// Largo de la cadena
document.write("Largo de la cadena: "+thor.length+"<br>");
//Encontrar la letra o
document.write("La letra o está en la posicion: "+thor.indexOf("o",0)+"<br>");
//Encontrar el carácter que ocupa la posición 3
document.write("Posición 3: "+thor.at(3)+"<br>");
//¿Qué carácter ocupa la posición 1?
document.write("Posición 1: "+thor.charAt(1)+"<br>");
//Trocea la cadena usando los espacios en blanco
document.write("Troceada: "+thor.split(" ")+"<br>");
//Reemplaza Thor por Loki
document.write("Reemplazada: "+thor.replace("Thor","Loki")+"<br>");
//Recorta la cadena para que devuelva la palabra Odín
document.write("Recortada: "+thor.substr(thor.indexOf("O") ,4)+"<br>");
//¿Puedes encontrar la letra a? Demuéstralo
document.write("La letra a está en la posicion: "+thor.indexOf("a",0)+"<br>");
/*Muestra -1 ya que no se encuentra en al array*/
//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
document.write("Mitad en minúsculas: "+(thor.slice(0,thor.length/2)).toLowerCase()+(thor.slice(thor.length/2,thor.length))+"<br>");