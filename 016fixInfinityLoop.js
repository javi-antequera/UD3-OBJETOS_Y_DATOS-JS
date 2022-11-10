let i = 0;
while (i.toFixed(1) != 10) {
  i += 0.2;
//   document.write(i+"<br>");
}
/*No acaba ya que es un decimal periódico lo que provoca la pérdida
 de precisión, por lo que nunca llega a 10 exacto.
 Para arreglarlo y poder redondear el numero, podemos usar la función toFixed(),
 indicando el numero de decimales que queremos que obtenga
 */