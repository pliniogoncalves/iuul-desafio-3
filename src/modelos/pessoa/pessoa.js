"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, telefone) {
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }
    //Metodos Get
    getNome() {
        return this._nome;
    }
    getCpf() {
        return this._cpf;
    }
    getTelefone() {
        return this._telefone;
    }
}
exports.Pessoa = Pessoa;
