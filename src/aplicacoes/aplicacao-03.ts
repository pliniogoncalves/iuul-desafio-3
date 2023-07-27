import { Cliente } from "../modelos/cliente/cliente";
import { ContaCorrente } from "../modelos/conta-corrente/contaCorrente";
import { Endereco } from "../modelos/endereco/endereco";

// Criando o Endereço
const endereco4 = new Endereco('12346-74','Rua D', '855', 'apartamento 35', 'Cidade W', 'SP');

//criando cliente
const cliente2 = new Cliente('Gonçalves', '555.666.777-88', '(88) 88888-8888', false, endereco4);

// Criando a ContaCorrente para o cliente
const contaCorrenteCliente2 = new ContaCorrente('1234-5', 0);

// Associando a ContaCorrente ao cliente
cliente2.associarConta(contaCorrenteCliente2);

// Efetuando três depósitos de R$100 na ContaCorrente
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente2.depositar(100);

// Efetuando um saque de R$50 na ContaCorrente
contaCorrenteCliente2.sacar(50);

// Imprimindo o valor do saldo atual da ContaCorrente
console.log(`Saldo da ContaCorrente: R$ ${contaCorrenteCliente2.calcularSaldo().toFixed(2)}`);