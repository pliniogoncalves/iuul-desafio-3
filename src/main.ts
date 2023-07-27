import { Cargo } from "./modelos/cargo/cargo";
import { Cliente } from "./modelos/cliente/cliente";
import { Endereco } from "./modelos/endereco/endereco";
import { Funcionario } from "./modelos/funcionario/funcionario";

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

// Criando os Endereços
const endereco1 = new Endereco('12346-77','Rua A', '55', 'apartamento 3', 'Cidade X', 'CE');
const endereco2 = new Endereco('12346-78','Rua B', '457','casa B', 'Cidade Y', 'MA');
const endereco3 = new Endereco('12346-79','Rua C', '13', 'nao tem', 'Cidade Z', 'PE');

//criando cliente
const cliente1 = new Cliente('Plinio', '111.222.333-44', '(77) 77777-7777', false, endereco1);

//adicionando mais endereços ao cliente
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);

// Imprimindo os endereços do cliente
console.log(`Endereços do cliente ${cliente1.getNome()}:`);
cliente1.listarEndereco().forEach((endereco, index) => {
  console.log(`Endereço ${index + 1}: ${endereco}`);
});

