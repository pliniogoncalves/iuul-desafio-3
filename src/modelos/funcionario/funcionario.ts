import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Cargo } from "../cargo/cargo";
import { Pessoa } from "../pessoa/pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    private cargo: Cargo | null;

    constructor(nome: string, cpf: string, telefone:string, cargo: Cargo, salario: number) {
        super(nome, cpf, telefone);
        this.cargo = null;
        this.salario = salario;
    }

    autenticar(): boolean {
        return false;
    }

    getSalario(): number {
        return this.salario;
    }

    setSalario(salario:number): void {
        this.salario = salario;
    }

    associarCargo(cargo: Cargo): void {
        this.cargo = cargo;
    }
    
    desassociarCargo(): void {
        this.cargo = null;
    }

   getCargo(): Cargo | null {
    return this.cargo;
   }
}