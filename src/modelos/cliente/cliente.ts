import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Endereco } from "../endereco/endereco";

export class Cliente implements IUsuario{
    private vip: boolean;
    private endereco: Endereco;

    constructor(vip: boolean, endereco: Endereco) {
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