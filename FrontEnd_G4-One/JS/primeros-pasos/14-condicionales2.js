const cdsDisponibles = [
    "Bogota",
    "Lima", 
    "Stgo", 
    "Montevideo"];

const precioCd = [500, 400, 300, 200];

//* *** Lista de mapas *** *//
const datos = 
[
    {
        'ciudad' : 'Bogota',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Stgo',
        'precio' : 300
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    },
];

const presupuestoDisp = 600;

//* WHILE ... 0 O MÁS VECES
let i = 0;
/* while( i < datos.length && datos[i].precio > presupuestoDisp && i < datos.length) {
    i++;
}
if (i == datos.length) 
    console.log("No tenemos pasajes disponiebles");
else 
    console.log("Puedes comprar pasaje para: " + datos[i].ciudad); */

//* DO WHILE
let cdSelect = '';
do {
    if (datos[i].precio < presupuestoDisp) {
        cdSelect = datos[i].ciudad; break;
    }
    i++;
} while (i < datos.lengt && cdSelect) 
if (cdSelect == '')
    console.log("No tenemos pasajes disponibles para: "); 
else
    console.log("Puedes comprar pasaje para: " 
    + cdSelect);