export abstract class Pessoa{
    protected _nome: string;
    protected _cpf: string;
    protected _telefone: string;

    constructor(nome: string, cpf: string, telefone: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    //Metodos Get

    getNome(): string {
        return this._nome;
    }

    getCpf(): string {
        return this._cpf;
    }

    getTelefone(): string {
        return this._telefone;
    }
}

