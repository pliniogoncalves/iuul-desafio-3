import { Cliente } from "../modelos/cliente/cliente";
import { Endereco } from "../modelos/endereco/endereco";

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