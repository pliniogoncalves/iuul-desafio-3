"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("../conta/conta");
const credito_1 = require("../credito/credito");
const debito_1 = require("../debito/debito");
class ContaCorrente extends conta_1.Conta {
    constructor(numero, limite) {
        super(numero);
        this.limite = limite;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(novoLimite) {
        this.limite = novoLimite;
    }
    transferir(contaDestino, valor) {
        if (valor <= this.getSaldo()) {
            const saldoAposTransferencia = this.getSaldo() - valor;
            if (saldoAposTransferencia >= -this.getLimite()) {
                this.sacar(valor);
                contaDestino.depositar(valor);
            }
            else {
                throw new Error('Limite de crédito insuficiente para realizar a transferência.');
            }
        }
        else {
            throw new Error('Saldo insuficiente para realizar a transferência.');
        }
    }
    calcularSaldo() {
        let saldoCorrente = 0;
        for (const transacao of this.getTransacoes()) {
            if (transacao instanceof credito_1.Credito) {
                saldoCorrente += transacao.getValor();
            }
            else if (transacao instanceof debito_1.Debito) {
                saldoCorrente -= transacao.getValor();
            }
        }
        return saldoCorrente + this.getLimite();
    }
}
exports.ContaCorrente = ContaCorrente;
