let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];
//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
for(key in grupos){
    if(grupos[key].genero=="Heavy Metal"){
        document.write("Grupos de Heavy metal: <br>")
        document.write(grupos[key].nombre);
    }
}
document.write("<br>")
//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let busca=grupos.find(item=>item.nombre=="Cold Play");
document.write(busca.genero);
document.write("<br>")
//¿En qué posición del array se encuenta “Cold Play”?
let pos=grupos.findIndex(item=>item.nombre=="Cold Play");
document.write("Cold Play ocupa la posición : "+pos);