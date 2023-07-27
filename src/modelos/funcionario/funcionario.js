"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("../pessoa/pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(nome, cpf, telefone, salario) {
        super(nome, cpf, telefone);
        this.cargo = null;
        this.salario = salario;
    }
    autenticar() {
        return false;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    associarCargo(cargo) {
        this.cargo = cargo;
    }
    desassociarCargo() {
        this.cargo = null;
    }
    getCargo() {
        return this.cargo;
    }
    exibirDados() {
        let dadosFuncionario = `
      Nome: ${this.getNome()}
      CPF: ${this.getCpf()}
      Telefone: ${this.getTelefone()}
      Salário: R$ ${this.salario.toFixed(2)}
    `;
        if (this.cargo) {
            dadosFuncionario += `Cargo: ${this.cargo.getNome()}`;
        }
        else {
            dadosFuncionario += 'Cargo: Não definido';
        }
        return dadosFuncionario;
    }
}
exports.Funcionario = Funcionario;
