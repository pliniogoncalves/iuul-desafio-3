"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
class Debito {
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
exports.Debito = Debito;
