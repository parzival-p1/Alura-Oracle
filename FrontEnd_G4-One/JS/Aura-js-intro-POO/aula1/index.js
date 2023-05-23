//* Clase
class Cliente
{   
    nombreCte;
    dniCte;
    rfcCte;
}

//? cta corriente
class cuentaCorriente 
{
    numero;
    saldo;
    agencia;

    //^ metodo
    depositoEnCta(valor) {
        this.saldo += valor;
    }
}

/* *** cliente1 *** */
const cliente1 = new Cliente();
cliente1.nombreCte = "Jose";
cliente1.dniCte = "13804050";
cliente1.rfcCte = "HETF030393"

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "232323"
cuentaCorriente1.saldo = 2000;
cuentaCorriente1.agencia = 1001

/* *** cliente2 *** */
const cliente2 = new Cliente();
cliente2.nombreCte = "Paco";
cliente2.dniCte = "13805060";
cliente2.rfcCte = "HETFJ03039312345";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "333333"
cuentaCorriente2.saldo  = 1000000;
cuentaCorriente2.agencia = 1002;

//* metodos
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCta(1000); //deposito
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCta(2000)
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCta(500);
console.log(cuentaCorriente2.saldo);

/* *** cliente3 *** */ 
const cliente3 = new Cliente();
cliente3.nombreCte = "María";
cliente3.dniCte = "138070080";
cliente3.rfcCte = "MFHV25079591363";

const cuentaCorriente3 = new cuentaCorriente();
cuentaCorriente3.numero = "44556677"
cuentaCorriente3.saldo  = 1000;
cuentaCorriente3.agencia = 1003;
