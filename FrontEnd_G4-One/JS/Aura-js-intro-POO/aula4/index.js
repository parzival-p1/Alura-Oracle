//* *** Importación de clases *** *//
import { Cliente } from "./cliente.js";
import { cuentaCorriente } from "./ctaCorriente.js";

//* cte 1
const cliente = new Cliente();
cliente.nombreCte = 'Paco';
cliente.dniCte = '12345678';
cliente.rfcCte = 'HETFJ0303937FJHT';

//* cta 1
const cuentaDePaco = new cuentaCorriente();
cuentaDePaco.numero = '1';
cuentaDePaco.agencia = '001';
cuentaDePaco.cliente = cliente;
//cuentaDePaco.#saldo = 0;


//* *** Interacción con el usuario *** *//
//? saldo actual
let saldo = cuentaDePaco.verSaldo();

saldo = cuentaDePaco.depositoEnCta(150);
console.log(`El saldo actual es (CtaDePaco): ${saldo}`);

//saldo = cuentaDePaco.depositoEnCta(100);
//console.log(`El saldo actual es: ${saldo}`);

//* cte 2
const cliente2 = new Cliente();
cliente2.nombreCte = 'Maria';
cliente2.dniCte = '87654321';
cliente2.rfcCte = 'TEMIJ0404947MJHT';

//* cta 2
const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

console.log(cuentaDeMaria.cliente); //* get cliente

cuentaDeMaria.cliente = 0;
console.log(cuentaDeMaria.cliente);

/* if (cuentaDeMaria.cliente)
    console.log(cuentaDeMaria.cliente);
else
    console.log(cuentaDeMaria);   */  

let parametroValor = 100;

/* console.log('Parametro Valor', parametroValor);
cuentaDePaco.transferirParaCta(parametroValor, cuentaDeMaria);
console.log('Parametro Valor', parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();
console.log('Cuenta de Maria', cuentaDeMaria); */


/* const saldoMaria = cuentaDeMaria.verSaldo();

console.log(`El saldo actual es (CtaMaria): ${saldoMaria}`);

const saldoPaco = cuentaDePaco.verSaldo();

console.log(`El saldo actual (ctaPaco) ${saldoPaco}`);
 */