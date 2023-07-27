export abstract class Pessoa{
    private nome: string;
    private cpf: string;
    private telefone: string;

    constructor(nome: string, cpf: string, telefone: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getTelefone(): string {
        return this.telefone;
    }
}

