function checkSpam(str){
    //Transformo el string entero a mayusculas para que no influyan en la comparacion
    let mayus=str.toUpperCase();
    if(mayus.includes('VIAGRA') || mayus.includes('XXX')){
        return true;
    }else{
        return false;
    }
}
alert(checkSpam('compra ViAgRA ahora'));
alert(checkSpam('xxxxx gratis'));
alert(checkSpam("coneja inocente")); 