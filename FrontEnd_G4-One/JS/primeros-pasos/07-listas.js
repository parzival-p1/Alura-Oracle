const cd1 = 'Bog'
const cd2 = 'Lima'
const cd3 = 'Stgo'

//* A R R A Y
const cdsDisponibles = new Array('Bog', 'Lima', 'Stgo');
console.log(cdsDisponibles);

//* Definición de una lista de forma abreviada
const paisesDisp = ['Mex', 'Col', 'Chile', 'Brasil'];
console.log(paisesDisp);

//* Agregar elemento nuevo a la lista
cdsDisponibles.push('cdmx');
console.log(cdsDisponibles);

paisesDisp.push('Peru');
console.log(paisesDisp);

//* Agregar elemento al principio de la lista
cdsDisponibles.unshift('Macao');
console.log(cdsDisponibles);

//* Remover elemento de la lista al final
cdsDisponibles.pop('cdmx');
console.log(cdsDisponibles);

//paisesDisp.pop('Peru');
console.log(paisesDisp);

//* Mostrar el primer elemento de la lista
console.log(paisesDisp[5]);

//^ Borrar elementos de la lista
paisesDisp2 = ['usa', 'mex', 'col', 'cr'];
paisesDisp2.splice(1,2, 'Vz', 'Arg');
console.log(paisesDisp2);
