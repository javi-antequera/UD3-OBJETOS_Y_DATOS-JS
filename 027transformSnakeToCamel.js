function camelice(str){
    let array=str.split("");//Divido el string en un array de char
    let array2=[];//Array para guardar el string sin las _
    let mayus=false;//Booleana de control para asignar las mayusculas
    for (let element of array) {
        if(element!="_"){//Si el elemento del array no es _
            if(mayus==true){//Si el ultimo elemento era _
                array2.push(element.toUpperCase());//Lo meto a mi array en mayusculas
                mayus=false;//Devuelvo el valor del controlador a false
            }else{//Si no meto el elemento sin cambios
                array2.push(element);
            } 
        }else{//Si el elemento es _ cambio el valor del controlador a true
            mayus=true;
        }
    }
    str=array2.join("");
    return str;
}
str="_webkit_transition";
document.write(camelice(str));