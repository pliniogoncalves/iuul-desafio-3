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
        this.clientes = [];
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
    associarCliente(cliente) {
        this.clientes.push(cliente);
    }
    desassociarCliente(cliente) {
        const index = this.clientes.indexOf(cliente);
        if (index !== -1) {
            this.clientes.splice(index, 1);
        }
    }
    getClientes() {
        return this.clientes;
    }
}
exports.Endereco = Endereco;
