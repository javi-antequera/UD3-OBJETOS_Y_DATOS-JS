/*
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  alert( user.ref.name );
  */
  //El resultado de hacer esto es undefined  porque es llamado como una función, no como un método
  //Entonces ref: this en realidad toma el this actual de la función, por lo que su valor es 1
  //Para arreglarlo, convertimos el ref en un metodo, cogiendo this el valor establecido al del objeto delante del punto.
  //Ahora sí, mostrará John
  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  let user = makeUser();
  alert( user.ref().name );
  