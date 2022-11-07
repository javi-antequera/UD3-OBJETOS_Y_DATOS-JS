let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
  }
let sum=0;
for (let salario in salaries){
    sum+=salaries[salario];
}
alert(sum);