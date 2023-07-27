export class Endereco {
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private uf:string;

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade:string, uf: string) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
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
    
}