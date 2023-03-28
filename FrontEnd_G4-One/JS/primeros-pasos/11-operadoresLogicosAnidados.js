//* *** Operadores Lógicos Encadenados *** *//

const cdDestino = "Bogota";
const cdsDisponibles = ["Bogota",
"Lima", "Stgo", "Montevideo"]


let edadPasajero = 17;
let estaAcompanado = false;
let tienePasaporte= true;
let estaCasdo = true;

//* A && B || C
console.log(`Verificando pasajes para... ${cdDestino}`);
//* Verificamos que el pasajero cumple las reglas

//* Evaluamos si la ciudad está disponible para viajar
if ((cdsDisponibles.indexOf(cdDestino) > -1) 
    && edadPasajero >= 18 && tienePasaporte
    && !estaCasdo) {
    console.log('Pasaje para solteros disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o el pasajero no cumple las reglas');
}