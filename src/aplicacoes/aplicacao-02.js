"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("../modelos/cliente/cliente");
const endereco_1 = require("../modelos/endereco/endereco");
// Criando os Endereços
const endereco1 = new endereco_1.Endereco('12346-77', 'Rua A', '55', 'apartamento 3', 'Cidade X', 'CE');
const endereco2 = new endereco_1.Endereco('12346-78', 'Rua B', '457', 'casa B', 'Cidade Y', 'MA');
const endereco3 = new endereco_1.Endereco('12346-79', 'Rua C', '13', 'nao tem', 'Cidade Z', 'PE');
//criando cliente
const cliente1 = new cliente_1.Cliente('Plinio', '111.222.333-44', '(77) 77777-7777', false, endereco1);
//adicionando mais endereços ao cliente
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);
// Imprimindo os endereços do cliente
console.log(`Endereços do cliente ${cliente1.getNome()}:`);
cliente1.listarEndereco().forEach((endereco, index) => {
    console.log(`Endereço ${index + 1}: ${endereco}`);
});
