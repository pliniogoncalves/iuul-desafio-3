import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Cargo } from "../cargo/cargo";
import { Pessoa } from "../pessoa/pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    private cargo: Cargo;

    constructor(nome: string, cpf: string, telefone:string, cargo: Cargo, salario: number) {
        super(nome, cpf, telefone);
        this.cargo = cargo;
        this.salario = salario;
    }

    autenticar(): boolean {
        return true;
    }

    getSalario(): number {
        return this.salario;
    }

    setSalario(salario:number): void {
        this.salario = salario;
    }

   getCargo(): Cargo {
    return this.cargo;
   }
}