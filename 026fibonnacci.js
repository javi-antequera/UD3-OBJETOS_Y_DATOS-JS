let fibonacci=new Array(20);
fibonacci[0]=0;
fibonacci[1]=1;
for(let i=2;i<20;i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
document.write("Sucesión de Fibonacci: <br>");
for (let num of fibonacci){
    document.write(" ");
    document.write(num);
}
