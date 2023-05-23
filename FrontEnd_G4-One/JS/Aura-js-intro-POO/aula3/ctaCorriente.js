//? cta corriente
export class cuentaCorriente 
{
    cliente;
    numero; 
    agencia;
    #saldo; // atributo privado

    //^ constructor
    constructor() {
        this.cliente = null; // objeto
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

    //^metodo3
    verSaldo() {
        return this.#saldo;
    }

    //^metodo4
    transferirParaCta(valor, ctaDestino) {
        this.retirarEnCta(valor);
        ctaDestino.depositoEnCta(valor);
        ctaDestino.depositoEnCta(valor);
        valor = 200;
        valor = valor * 100;
    }
}