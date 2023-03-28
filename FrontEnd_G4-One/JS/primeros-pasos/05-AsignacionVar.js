//* *** Asignacion de variables *** *//

/**
 ** @const: Palabra reservada
 ** Espacio de mem que luego de asignar su valor
 ** no cambia con el tiemmpo
 **/ 
const valorPasaje = 1650;
const nombrePasajero = "Leo";
const apellidosPasajero = "Lacruz";

console.log(valorPasaje);
console.log(nombrePasajero);
console.log(apellidoPasajero);
//! nombrePasajero = nombrePasajero + " " + apellidoPasajero;

/**
 ** @let: Palabra reservada
 ** Espacio de mem que puede cambiar durante
 ** la ejecucion del programa
 **/ 

console.log(nombreCompletoPasajero);

/**
 ** @var: Palabra reservada
 ** Espacio de mem que puede cambiar durante
 ** la ejecucion del programa
 ** El alcance de var es total 
 **/ 

//* Bloque
{
    // Palabra let
    // Espacio de mem que cambia con el time
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    
    // Palabra var
    // Espacio de mem que puede cambiar durante
    // la ejecucion del progra
    var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
    
    console.log("Varibale con let" + nombreCompletoPasajero);
    console.log("Varibale con var" + nombreCompletoDelPasajero);
}
console.log("Varibale con var" + nombreCompletoDelPasajero);
console.log("Varibale con let" + nombreCompletoPasajero);

