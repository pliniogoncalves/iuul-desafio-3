"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero) {
        this._numero = numero;
    }
    //metodos get
    getNumero() {
        return this._numero;
    }
}
exports.Conta = Conta;
