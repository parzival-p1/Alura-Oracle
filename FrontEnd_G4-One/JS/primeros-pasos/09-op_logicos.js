//* Operadores de comparación
const cdDestino = 'Bog'
const cdsDisponibles = new Array('Bog', 'Lima', 'Stgo');

/**
 * &  C O N D I C I O N A L E S 
 * * Palabra reservada if
 * * Evalúa una condición
 * ? si (cdDestino entre la lista)
 * ^ escribe vendo boleto
 *  */
const valorPAsaje = 1000;
if (valorPAsaje === 1000) {
    console.log('El pasaje vale 1000');
}
/** 
 * & O P E R A D O R E S   L O G I C O S
 * * Y (AND) - O (OR) - NO (NOT)
 * * AND = && se debenn cumplir 2 condiciones
 * ? OR = || se debe cumplir 1 condicion al menos
 * ^ NOT = ! no se cumple la condicion
 *  */

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para... ${cdDestino}`);

if ((cdsDisponibles.indexOf(cdDestino) >= -1)
&& (edadPasajero >= 18 || estaAcompanado))
{
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o el pasajero no cumple las reglas');
}

edadPasajero = 17;
estaAcompanado = true;

//* Aplicando logica negativa
if (!((cdsDisponibles.indexOf(cdDestino) >= -1)
&& (edadPasajero >= 18) || estaAcompanado)) {  
    console.log('Ciudad no disponible para viajar o el pasajero no cumple las reglas');
} else {
    console.log('Pasaje disponible para venta');
}

