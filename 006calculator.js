let calculator={
    read(){
        this.a=parseInt(prompt("Escribe el primer numero"));
        this.b=parseInt(prompt("Escribe el segundo numero"));
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());