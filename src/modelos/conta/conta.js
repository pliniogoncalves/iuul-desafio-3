"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const debito_1 = require("../debito/debito");
class Conta {
    constructor(numero, limite) {
        this.saldo = 0;
        this.numero = numero;
        this.limite = limite;
        this.transacoes = [];
    }
    getNumero() {
        return this.numero;
    }
    getSaldo() {
        return this.saldo;
    }
    getLimite() {
        return this.limite;
    }
    depositar(valor) {
        const debito = new debito_1.Debito(valor, new Date());
        const saldoAposDebito = this.saldo - valor;
        if (saldoAposDebito >= -this.limite) {
            this.transacoes.push(debito);
            this.saldo -= valor;
        }
        else {
            throw new Error('Saldo insuficiente para realizar o saque.');
        }
    }
    sacar(valor) {
        const debito = new debito_1.Debito(valor, new Date());
        const saldoAposDebito = this.saldo - valor;
        if (saldoAposDebito >= -this.limite) {
            this.transacoes.push(debito);
            this.saldo -= valor;
        }
        else {
            throw new Error('Saldo insuficiente para realizar o saque.');
        }
    }
    getTransacoes() {
        return this.transacoes;
    }
}
exports.Conta = Conta;
