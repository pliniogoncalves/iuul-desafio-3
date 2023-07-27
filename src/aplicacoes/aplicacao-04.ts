import { Cliente } from "../modelos/cliente/cliente";
import { ContaCorrente } from "../modelos/conta-corrente/contaCorrente";
import { ContaPoupanca } from "../modelos/conta-poupanca/contaPoupanca";
import { Endereco } from "../modelos/endereco/endereco";

// Criando o Endereço
const endereco5 = new Endereco('12346-72','Rua E', '785', 'nao tem', 'Cidade P', 'RJ');

//criando cliente Conta Corrente
const cliente3 = new Cliente('Plinio Ricardo', '888.999.000-11', '(55) 55555-5555', false, endereco5);
const contaCorrenteCliente3 = new ContaCorrente('001', 0);
cliente3.associarConta(contaCorrenteCliente3);

// Efetuando um depósito de 1000 na ContaCorrente
contaCorrenteCliente3.depositar(1000);

//criando cliente Conta Poupança
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