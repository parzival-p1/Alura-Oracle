//* *** Tipos de datos *** *//
//* Alfanúmerico
//let nombrePasajero = "Pedro Sila"
//nombrePasajero = "Ramon Silva"

//* Númerico
let valorBol = 1000;
const taxAereopuerto = 100;
const porcentasaEmbarque = 60/100;
var gestionAgencia = 100;

//* Operaciones aritméticas
/**
 ** Orden de precedencia de op matemáticas
 ** ()
 ** * y /
 ** + y -
 ** 
 **/

//* resultado
let totalBoletos = (valorBol + taxAereopuerto) + (valorBol + taxAereopuerto) * porcentasaEmbarque + gestionAgencia;
console.log(totalBoletos); // 1860

//* Concatenación de Texto
let nombrePasajero = "Leo";
let apellidoPasajero = " Lacruz";
let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = '1000' + '12';
let multi = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multi);

let noEsNum = parseInt('ASASAS');
console.log(noEsNum);

/** 
 ** ParseInt & ParseFloat
 ** Convierten el tipo de dato
 ** @ParseInt: cconvierta de char a int
 ** @ParseFloat: convierte de int a char
 **/