import { Cargo } from "../modelos/cargo/cargo";
import { Funcionario } from "../modelos/funcionario/funcionario";

//criando os cargos
const gerenteCargo = new Cargo('Gerente');
const atendenteCargo = new Cargo('Atendente');

//criando os funcionarios
const funcionarioGerente = new Funcionario('Plinio', '123.456.789-00', '(99) 9999-9999', 8000);
const funcionarioAtendente = new Funcionario('Ricardo', '987.654.321-00', '(88) 8888-8888', 3000);

//associando os cargos aos funcionarios
funcionarioGerente.associarCargo(gerenteCargo);
funcionarioAtendente.associarCargo(atendenteCargo);

// Exibindo todos os dados dos funcionários
console.log(funcionarioGerente.exibirDados());
console.log(funcionarioAtendente.exibirDados());