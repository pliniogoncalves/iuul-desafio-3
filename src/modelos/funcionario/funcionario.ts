import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { Cargo } from "../cargo/cargo";
import { Pessoa } from "../pessoa/pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private salario: number;
    private cargo: Cargo | null;

    constructor(nome: string, cpf: string, telefone:string, salario: number) {
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

   exibirDados(): string {
    let dadosFuncionario = `
      Nome: ${this.getNome()}
      CPF: ${this.getCpf()}
      Telefone: ${this.getTelefone()}
      Salário: R$ ${this.salario.toFixed(2)}
    `;

    if (this.cargo) {
      dadosFuncionario += `Cargo: ${this.cargo.getNome()}`;
    } else {
      dadosFuncionario += 'Cargo: Não definido';
    }

    return dadosFuncionario;
  }
}