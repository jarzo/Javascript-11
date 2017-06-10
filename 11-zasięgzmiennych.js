'use strict'
/*lokalna nadpisyje wartość globalną w przypadku gdy są takie same nazwy np. wart 1 globalna i wart1 lokalna*/


var kszysiek = 3500;
var jurek = 5000;
var jola = 7500;
var sergio = 2500;


function policzSumeKasy(skladowa1, skladowa2, skladowa3, skladowa4){

var sumaKasy;
sumaKasy = skladowa1 + skladowa2 + skladowa3 +skladowa4;

return sumaKasy;
}

sumaKasy = policzSumeKasy( krzysiek, jurek, jola, sergio );
console.log(sumaKAsy);
