let personajes = [
    {id: 1, name: "Peter Parker", age: 21},
    {id: 2, name: "Steve", age: 64},
    {id: 3, name: "Harry Potter", age: 24},
  ];

    let personajesById = groupById(personajes);
    console.log(personajes);
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }