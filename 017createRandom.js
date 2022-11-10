function random(min, max) {
    //n=min+random entre 0 y 1 por max-min para que siempre esté en ese rango
    let num=min + Math.random() * (max - min);
    return num;
  }
    alert( random(3, 9) ); 
    alert( random(1, 5) ); 
    alert( random(1, 5) ); 