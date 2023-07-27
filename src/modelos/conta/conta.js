"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const credito_1 = require("../credito/credito");
const debito_1 = require("../debito/debito");
class Conta {
    constructor(numero) {
        this.saldo = 0;
        this.numero = numero;
        this.transacoes = [];
    }
    getNumero() {
        return this.numero;
    }
    getSaldo() {
        const totalCreditos = this.transacoes
            .filter((transacao) => transacao instanceof credito_1.Credito)
            .reduce((total, credito) => total + credito.getValor(), 0);
        const totalDebitos = this.transacoes
            .filter((transacao) => transacao instanceof debito_1.Debito)
            .reduce((total, debito) => total + debito.getValor(), 0);
        return totalCreditos - totalDebitos;
    }
    depositar(valor) {
        const credito = new credito_1.Credito(valor, new Date());
        this.transacoes.push(credito);
    }
    sacar(valor) {
        const saldoAposSaque = this.getSaldo() - valor;
        if (saldoAposSaque >= -this.getLimite()) {
            const debito = new debito_1.Debito(valor, new Date());
            this.transacoes.push(debito);
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
