import { Cliente } from "../cliente/cliente";

export class Endereco {
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private uf:string;
    private clientes: Cliente[];

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade:string, uf: string) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
        this.clientes = [];
    }

    getCep(): string {
        return this.cep;
    }

    getLogradouro(): string {
        return this.logradouro;
    }

    getNumero(): string {
        return this.numero;
    }

    getComplemento(): string {
        return this.complemento;
    }

    getCidade(): string {
        return this.cidade;
    }

    getUf(): string {
        return this.uf;
    }

    associarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    desassociarCliente(cliente: Cliente): void {
        const index = this.clientes.indexOf(cliente);
        if(index !== -1) {
            this.clientes.splice(index, 1);
        }
    }

    getClientes(): Cliente[] {
        return this.clientes;
    }
    
}