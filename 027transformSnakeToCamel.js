function camelice(str){
    let array=str.split("");
    let array2=[];//Array para guardar el string sin las _
    let mayus=false;//Booleana de control para asignar las mayusculas
    for (let element of array) {
        if(element!="_"){
            if(mayus==true){
                array2.push(element.toUpperCase());
                mayus=false;
            }else{
                array2.push(element);
            } 
        }else{
            mayus=true;
        }
    }
    str=array2.join("");
    return str;
}
str="_webkit_transition";
document.write(camelice(str));