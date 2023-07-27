"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("../pessoa/pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(nome, cpf, telefone, cargo, salario) {
        super(nome, cpf, telefone);
        this.cargo = cargo;
        this.salario = salario;
    }
    autenticar() {
        return true;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getCargo() {
        return this.cargo;
    }
}
exports.Funcionario = Funcionario;
