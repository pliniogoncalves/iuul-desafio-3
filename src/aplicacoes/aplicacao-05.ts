import { Cliente } from "../modelos/cliente/cliente";
import { ContaCorrente } from "../modelos/conta-corrente/contaCorrente";
import { Endereco } from "../modelos/endereco/endereco";

// Criando o Endereço
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