import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Conta } from "../conta/conta";
import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

export class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    private endereco: Endereco;
    private contas: Conta[];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, endereco: Endereco) {
        super(cpf, nome, telefone)
        this.vip = vip;
        this.endereco = endereco;
        this.contas = [];
    }

    autenticar(): boolean {
        return true;
    }

    listarEndereco(): string {
        return `Endereço: ${this.endereco.getCep()}, ${this.endereco.getLogradouro()}, ${this.endereco.getNumero()}, ${this.endereco.getComplemento()}, ${this.endereco.getCidade()}, ${this.endereco.getUf()}`; 
    }

    associarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    desassociarConta(conta: Conta): void {
        const index = this.contas.indexOf(conta);
        if(index !== -1) {
            this.contas.splice(index, 1)
        }
    }

    getContas(): Conta[] {
        return this.contas;
    }
}