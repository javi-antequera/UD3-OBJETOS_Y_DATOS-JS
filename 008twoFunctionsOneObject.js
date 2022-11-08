function A() { "a" }
function B() { "a" }
let a = new A();
let b = new B();
alert( a == b ); // true
//Siempre da false porque aunque contengan lo mismo, siempre van a ser distintos objetos