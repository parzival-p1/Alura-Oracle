const cdsDisponibles = [
    "Bogota",
    "Lima", 
    "Stgo", 
    "Montevideo"];

const precioCd = [
    500,
    400,
    300,
    200
];

const presupuestoDisp = 390;

//* WHILE ... 0 O MÁS VECES
let i = 0;
while (precioCd[i] > presupuestoDisp
    && i < cdsDisponibles.length) {
    i++;
}
if (i == cdsDisponibles.length)
    console.log("No tenemos pasajes disponibles para: "); 
else
    console.log("Puedes comprar pasaje para: " 
    + cdsDisponibles[i]);

//* DO ... 1 O MÁS VECES 
    
let j = 0;
do {
    i++;
} while (precioCd[i] > presupuestoDisp
    && i < cdsDisponibles.length)

if (i == cdsDisponibles.length)
    console.log("No tenemos pasajes disponibles para: "); 
else
    console.log("Puedes comprar pasaje para: " 
    + cdsDisponibles[i]);
