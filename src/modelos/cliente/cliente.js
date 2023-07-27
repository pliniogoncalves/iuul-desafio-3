"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("../pessoa/pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip, endereco) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = [endereco];
        this.contas = [];
    }
    autenticar() {
        return true;
    }
    listarEndereco() {
        return this.enderecos.map((endereco) => `Endereço: ${endereco.getCep()}, ${endereco.getLogradouro()}, ${endereco.getNumero()}, ${endereco.getComplemento()}, ${endereco.getCidade()}, ${endereco.getUf()}`);
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    associarConta(conta) {
        this.contas.push(conta);
    }
    desassociarConta(conta) {
        const index = this.contas.indexOf(conta);
        if (index !== -1) {
            this.contas.splice(index, 1);
        }
    }
    getContas() {
        return this.contas;
    }
}
exports.Cliente = Cliente;
