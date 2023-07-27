"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    getCep() {
        return this.cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    getNumero() {
        return this.numero;
    }
    getComplemento() {
        return this.complemento;
    }
    getCidade() {
        return this.cidade;
    }
    getUf() {
        return this.uf;
    }
}
exports.Endereco = Endereco;
