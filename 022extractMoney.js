"use strict"
function extractCurrencyValue(str){
    return +str.splice(1);
}
alert(extractCurrencyValue("$120")===120);