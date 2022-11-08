function Calculator(){
    read(){
        this.a=parseInt(prompt("Escribe el primer numero"));
        this.b=parseInt(prompt("Escribe el segundo numero"));
    };
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
};
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );