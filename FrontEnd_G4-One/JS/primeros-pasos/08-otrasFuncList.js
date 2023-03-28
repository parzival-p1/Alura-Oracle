const cdsDisponibles = new Array('Bog', 'Lima', 'Stgo');
const paisesDisp = ['Mex', 'Col', 'Chile', 'Brasil'];

//* Saber el tamaño de una lista func length
const cantDeCds = cdsDisponibles.length;

console.log(`En la lista de ciudades disponibles tenemos: ${cantDeCds} elementos`);
console.log(`En la lista de ciudades disponibles tenemos: ${paisesDisp.length} elementos`);

//^ Remover el 1er elemento
cdsDisponibles.shift();
console.log(cdsDisponibles)
console.log(`En la lista de ciudades tenemos ${cdsDisponibles.length} elementos`);;

//^ Remover el último elemento
console.log(cdsDisponibles);
console.log(`En la lista de ciduades tenemos ${cdsDisponibles.length} elementos`);

//* Filtrar elm de la lista
const paisesFiltrados = paisesDisp.filter((e)=> e.length > 5);
console.log(paisesFiltrados); // [ 'Brasil' ]

//* Convertir una lista en cadena de chars
console.log(paisesDisp.join('-')); // Mex-Col-Chile-Brasil

//* Ordenar una lista
console.log(paisesDisp.sort()); // [ 'Brasil', 'Chile', 'Col', 'Mex' ]

//* Conociendo la pos 
console.log(`Brasil está en la pos ${paisesDisp.indexOf('Brasil')}`);

//* Unificar listas
const listasPaisesYCiudades = paisesDisp.concat(cdsDisponibles);
console.log(listasPaisesYCiudades); // [ 'Brasil', 'Chile', 'Col', 'Mex', 'Lima', 'Stgo' ]