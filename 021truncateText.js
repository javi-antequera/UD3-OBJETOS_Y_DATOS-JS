function truncate(str,maxlength){
    let array=str.split("");
    if(array.length<=maxlength){
        return str;
    }else{
        let resultado="";
        for(let i=0;i<maxlength;i++){
            resultado=resultado +array[i];
        }
        return resultado+"...";
    }
}
document.write(truncate("Lo que me gustaría contar sobre este tema es:", 20));
document.write("<br>")
document.write(truncate("Hola a todos!", 20));