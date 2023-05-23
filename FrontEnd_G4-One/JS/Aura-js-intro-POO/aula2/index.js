//* *** Definición de clases *** *//
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
    #saldo; // atributo privado
    agencia;

    //^ constructor
    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    //^ metodo1
    depositoEnCta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;    
    }

    //^metodo2
    retirarEnCta(valor) {
        if (valor <= this.#saldo) //protec de codigo
            this.#saldo -= valor; 
        return this.#saldo;            
    }

    verSaldo() {
        return this.#saldo;
    }
}
cuentaDePaco = new cuentaCorriente();
//cuentaDePaco.saldo = 0;

//* *** Interacción con el usuario *** *//
//? saldo actual
let saldo = cuentaDePaco.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDePaco.depositoEnCta(100);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDePaco.retirarEnCta(100);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDePaco.depositoEnCta(-10);
console.log(`El saldo actual es: ${saldo}`);
