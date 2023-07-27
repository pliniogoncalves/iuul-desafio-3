"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    getValor() {
        return this.valor;
    }
    getData() {
        return this.data;
    }
}
exports.Credito = Credito;
