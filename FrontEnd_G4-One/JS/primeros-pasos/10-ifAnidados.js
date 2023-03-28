/** 
 *& I F  A N I D A D O S
 ** 
 ** 
 ** 
 ** 
*/

const cdDestino = 'Bog'
const cdsDisponibles = new Array('Bog', 'Lima', 'Stgo');

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para... ${cdDestino}`);
//* Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado)
{   
    //* Evaluamos si la ciudad está disponible para viajar
    if (cdsDisponibles.indexOf(cdDestino) >= -1) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar o el pasajero no cumple las reglas');
    }
} else {
    if (edadPasajero >= 16 && cdDestino == 'Lima') {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Pasajero no cumple con las reglas');
    }
}


