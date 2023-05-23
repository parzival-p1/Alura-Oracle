import { Cliente } from "./cliente.js";

//? cta corriente
export class cuentaCorriente 
{
    #cliente; // att priv
    numero; 
    agencia;
    #saldo; // atributo privado

    //* setter
    set cliente(valor) {
        //si el val recibido es una instancia de la clase cliente
        if (valor instanceof Cliente) 
            this.#cliente = valor;
    }

    //* getter
    get cliente() {
        return this.#cliente;
    }

    //^ constructor
    constructor() {
        //& null indica que no existe aún pero está implicita
        this.#cliente = null; // objeto para no tener var undefined
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