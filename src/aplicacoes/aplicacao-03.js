"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("../modelos/cliente/cliente");
const contaCorrente_1 = require("../modelos/conta-corrente/contaCorrente");
const endereco_1 = require("../modelos/endereco/endereco");
// Criando o Endereço
const endereco4 = new endereco_1.Endereco('12346-74', 'Rua D', '855', 'apartamento 35', 'Cidade W', 'SP');
//criando cliente
const cliente2 = new cliente_1.Cliente('Gonçalves', '555.666.777-88', '(88) 88888-8888', false, endereco4);
// Criando a ContaCorrente para o cliente
const contaCorrenteCliente2 = new contaCorrente_1.ContaCorrente('1234-5', 0);
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
