"use strict"
function Calculator(){
    this.read=function(){
        this.a=parseInt(prompt("Escribe el primer numero"));
        this.b=parseInt(prompt("Escribe el segundo numero"));
    };
    this.sum=function(){
        return this.a+this.b;
    },
    this.mul=function(){
        return this.a*this.b;
    }
};
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );