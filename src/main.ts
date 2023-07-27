import { Cargo } from "./modelos/cargo/cargo";
import { Cliente } from "./modelos/cliente/cliente";
import { ContaCorrente } from "./modelos/conta-corrente/contaCorrente";
import { ContaPoupanca } from "./modelos/conta-poupanca/contaPoupanca";
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

// Criando o Endereço4
const endereco4 = new Endereco('12346-74','Rua D', '855', 'apartamento 35', 'Cidade W', 'SP');

//criando cliente2
const cliente2 = new Cliente('Gonçalves', '555.666.777-88', '(88) 88888-8888', false, endereco4);

// Criando a ContaCorrente para o cliente2
const contaCorrenteCliente2 = new ContaCorrente('1234-5', 0);

// Associando a ContaCorrente ao cliente2
cliente2.associarConta(contaCorrenteCliente2);

// Efetuando três depósitos de R$100 na ContaCorrente
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente2.depositar(100);

// Efetuando um saque de R$50 na ContaCorrente
contaCorrenteCliente2.sacar(50);

// Imprimindo o valor do saldo atual da ContaCorrente
console.log(`Saldo da ContaCorrente: R$ ${contaCorrenteCliente2.calcularSaldo().toFixed(2)}`);

// Criando o Endereço5
const endereco5 = new Endereco('12346-72','Rua E', '785', 'nao tem', 'Cidade P', 'RJ');

//criando cliente3 Conta Corrente
const cliente3 = new Cliente('Plinio Ricardo', '888.999.000-11', '(55) 55555-5555', false, endereco5);
const contaCorrenteCliente3 = new ContaCorrente('001', 0);
cliente3.associarConta(contaCorrenteCliente3);

// Efetuando um depósito de 1000 na ContaCorrente
contaCorrenteCliente3.depositar(1000);

//criando cliente4 Conta Poupança
const cliente4 = new Cliente('Ricardo Plinio', '111.222.333-44', '(44) 44444-4444', false, endereco5);
const contaPoupancaCliente4 = new ContaPoupanca('002');
cliente4.associarConta(contaPoupancaCliente4);

// Efetuando um depósito de 1000 na ContaPoupanca
contaPoupancaCliente4.depositar(1000);

// Efetuando uma transferência de 500 da ContaCorrente para a ContaPoupanca
contaCorrenteCliente3.transferir(contaPoupancaCliente4, 500);

// Exibindo o saldo das duas contas
console.log(`Saldo da Conta Corrente: R$ ${contaCorrenteCliente3.getSaldo()}`);
console.log(`Saldo da Conta Poupança: R$ ${contaPoupancaCliente4.getSaldo()}`);

// Criando o Endereço6
const endereco6 = new Endereco('12346-70','Rua 6', '156', 'nao tem', 'Metropole-Caucaia', 'CE');

//criando cliente 5 Conta Corrente
const cliente5 = new Cliente('Plinio Ricardo Gonçalves', '777.777.777-77', '(12) 12121-2121', true, endereco6);
const contaCorrenteCliente5 = new ContaCorrente('001', 0);
cliente5.associarConta(contaCorrenteCliente5);

// Efetuando um depósito de 300 na ContaCorrente
contaCorrenteCliente5.depositar(300);

// Definindo o limite da ContaCorrente para 100 reais (cliente5)
contaCorrenteCliente5.setLimite(100);

//criando cliente 6 Conta Corrente
const cliente6 = new Cliente('Plinio Ricardo Gonçalves', '777.777.777-77', '(12) 12121-2121', true, endereco6);
const contaCorrenteCliente6 = new ContaCorrente('002', 0);
cliente6.associarConta(contaCorrenteCliente6);

// Efetuando um depósito de 100 na ContaCorrente (cliente6)
contaCorrenteCliente6.depositar(100);


// Tentando efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaCorrente
try {
    contaCorrenteCliente5.transferir(contaCorrenteCliente6, 1000);
    console.log('Transferência entre Contas Correntes realizada com sucesso.');
  } catch (error: any) {
    console.log(error.message);
}

// Exibindo o saldo das duas contas após a transferência
console.log(`Saldo da ContaCorrente 5: R$ ${contaCorrenteCliente5.getSaldo()}`);
console.log(`Saldo da ContaCorrente 6: R$ ${contaCorrenteCliente6.getSaldo()}`);

