import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Conta } from "../conta/conta";
import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

export class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    private enderecos: Endereco[];
    private contas: Conta[];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, endereco: Endereco) {
        super(cpf, nome, telefone)
        this.vip = vip;
        this.enderecos = [endereco];
        this.contas = [];
    }

    autenticar(): boolean {
        return true;
    }

    listarEndereco(): string[] {
        return this.enderecos.map((endereco) => `Endereço: ${endereco.getCep()}, ${endereco.getLogradouro()}, ${endereco.getNumero()}, ${endereco.getComplemento()}, ${endereco.getCidade()}, ${endereco.getUf()}`); 
    }

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
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