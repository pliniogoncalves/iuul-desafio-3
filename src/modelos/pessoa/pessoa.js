"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    //Metodos Get
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getTelefone() {
        return this.telefone;
    }
}
exports.Pessoa = Pessoa;
