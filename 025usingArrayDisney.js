let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];
//Meter a Peter Pan al final del array disney.
disney.push({nombre:"Peter Pan", pelicula:"Peter Pan"});
//Pintar el array
for(let p of disney){
    document.write("Personaje: "+p.nombre+" ------ Película:"+p.pelicula+"<br>");
}
//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({nombre:"El capitán Garfio",pelicula:"Peter Pan"});
//Meter al cocodrilo detrás del capitán, no olvides la película
//Ocupa la posición 1, reemplaza a 0 elementos
disney.splice(1,0,{nombre:"cocodrilo",pelicula:"Peter Pan"});
//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
document.write("<br>");
for(let p of disney){
    if(p.pelicula=="Peter Pan"){
        document.write("Personaje: "+p.nombre+"<br>");
    }
}
//Encontrar el índice de Campanilla.
document.write("<br>");
for(let p of disney){
    if(p.nombre=="Campanilla"){
        document.write("Campanilla ocupa la posición: "+disney.indexOf(p));
    }
}
//Buscar al cocodrilo.
document.write("<br>");
for(let p of disney){
    if(p.nombre=="cocodrilo"){
        document.write("El cocodrilo ocupa la posición: "+disney.indexOf(p));
    }
} 
//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[random];    
        array[random] = temp;
    }
}
shuffle(disney);
document.write("<br>");
document.write("<br>");
for(let p of disney){
    document.write("Personaje: "+p.nombre+" ------ Película:"+p.pelicula+"<br>");
}
