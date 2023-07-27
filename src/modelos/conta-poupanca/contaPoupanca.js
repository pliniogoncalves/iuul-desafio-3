"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("../conta/conta");
const credito_1 = require("../credito/credito");
const debito_1 = require("../debito/debito");
class ContaPoupanca extends conta_1.Conta {
    constructor(numero) {
        super(numero, 0);
    }
    calcularSaldo() {
        let saldoPoupanca = 0;
        for (const transacao of this.getTransacoes()) {
            if (transacao instanceof credito_1.Credito) {
                saldoPoupanca += transacao.getValor();
            }
            else if (transacao instanceof debito_1.Debito) {
                saldoPoupanca -= transacao.getValor();
            }
        }
        return saldoPoupanca;
    }
}
exports.ContaPoupanca = ContaPoupanca;
