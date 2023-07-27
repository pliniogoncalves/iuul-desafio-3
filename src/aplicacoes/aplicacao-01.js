"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cargo_1 = require("../modelos/cargo/cargo");
const funcionario_1 = require("../modelos/funcionario/funcionario");
//criando os cargos
const gerenteCargo = new cargo_1.Cargo('Gerente');
const atendenteCargo = new cargo_1.Cargo('Atendente');
//criando os funcionarios
const funcionarioGerente = new funcionario_1.Funcionario('Plinio', '123.456.789-00', '(99) 9999-9999', 8000);
const funcionarioAtendente = new funcionario_1.Funcionario('Ricardo', '987.654.321-00', '(88) 8888-8888', 3000);
//associando os cargos aos funcionarios
funcionarioGerente.associarCargo(gerenteCargo);
funcionarioAtendente.associarCargo(atendenteCargo);
// Exibindo todos os dados dos funcionários
console.log(funcionarioGerente.exibirDados());
console.log(funcionarioAtendente.exibirDados());
