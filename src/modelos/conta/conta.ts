import { Credito } from "../credito/credito";
import { Debito } from "../debito/debito";

export abstract class Conta{
    private numero: string;
    protected saldo: number = 0;
    private limite: number;
    private transacoes:(Debito | Credito)[];

    constructor(numero: string, limite:number) {
        this.numero = numero;
        this.limite = limite;
        this.transacoes = [];
    }

    getNumero(): string {
        return this.numero;
    }

    getSaldo(): number {
        return this.saldo;
    }

    getLimite(): number {
        return this.limite;
    }

    depositar(valor: number): void {
        const debito = new Debito(valor, new Date());
        const saldoAposDebito = this.saldo - valor;

        if(saldoAposDebito >= -this.limite) {
            this.transacoes.push(debito);
            this.saldo -= valor;
        } else {
            throw new Error('Saldo insuficiente para realizar o saque.')
        }
    }

    sacar(valor: number): void {
        const debito = new Debito(valor, new Date());
        const saldoAposDebito = this.saldo - valor;

        if(saldoAposDebito >= -this.limite) {
            this.transacoes.push(debito);
            this.saldo -= valor;
        } else {
            throw new Error('Saldo insuficiente para realizar o saque.')
        }
    }

    getTransacoes(): (Debito | Credito)[]{
        return this.transacoes;
    }

    abstract calcularSaldo(): number;
}