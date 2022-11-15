"use strict"
//PREGUNTA: Por qué 6.35.toFixed(1) == 6.3? 
//RESPUESTA: Debido a la perdida de precisión al hacer internamente la fracción decimal
//          En este caso el número se vuelve un poco menor, por lo que redondea hacia abajo

//PREGUNTA:¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
//RESPUESTA: Siempre es debido a la perdida de precisión, redondea al numero mas cercano quede 

//PREGUNTA: ¿Cómo redondear 6.35 de manera correcta?
//RESPUESTA:Hay que llevarlo más cerca de un entero antes de que realice el redondeo--> (6.35 * 10).toFixed(20) esto da 63.5
//          El resultado no tiene perdida de precisión, ya que da un número exacto(no tiene decimales periódicos),por lo tanto, para
//          redondearlo simplemente--> Math.round(6.35 * 10)/10