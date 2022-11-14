var fruits = ["Banana", "Manzana", "Fresa"];
//Añadimos cereza al principio
fruits.unshift("Cereza");
//Añadimos melocotón al final
fruits.push("Melocotón");
//Mostrar el array elemento a elemento con for clásico
for(let a of fruits){
    alert(a);
}
//Eliminamos el primer elemento.
fruits.shift();
//Eliminamos el último elemento.
fruits.pop();
//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for(let a of fruits){
    alert(a);
}//Uso for of ya que es el adecuado para arrays, el for in es más óptimo para objetos