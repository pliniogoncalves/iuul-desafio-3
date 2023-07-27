import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

export class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    private endereco: Endereco;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, endereco: Endereco) {
        super(cpf, nome, telefone)
        this.vip = vip;
        this.endereco = endereco;
    }

    autenticar(): boolean {
        return true;
    }

    listarEndereco(): string {
        return `Endereço: ${this.endereco.getCep()}, ${this.endereco.getLogradouro()}, ${this.endereco.getNumero()}, ${this.endereco.getComplemento()}, ${this.endereco.getCidade()}, ${this.endereco.getUf()}`; 
    }
}