let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };
  mostrarMenu(menu);
  multiplyNumeric(menu);
  mostrarMenu(menu);
  function multiplyNumeric(menu){
    for (let propiedad in menu){
      if(typeof menu[propiedad]=="number"){
        menu[propiedad]=menu[propiedad]*2;
      }
    }
  }
  //Funcion que muestra todos los dtos del menú para comprobar los cambios
  function mostrarMenu(menu){
    for (let propiedad in menu){
      alert(menu[propiedad]);
    }
  }