export class Debito {
    private valor: number;
    private data: Date;

    constructor(valor: number, data: Date) {
        this.valor = valor;
        this.data = data;
    }

    getValor(): number {
        return this.valor;
    }

    getData(): Date {
        return this.data;
    }
}