import { Credito } from "../credito/credito";
import { Debito } from "../debito/debito";

export abstract class Conta{
    private numero: string;
    protected saldo: number = 0;
    private transacoes:(Debito | Credito)[];

    constructor(numero: string) {
        this.numero = numero;
        this.transacoes = [];
    }

    getNumero(): string {
        return this.numero;
    }

    getSaldo(): number {
        const totalCreditos = this.transacoes
          .filter((transacao) => transacao instanceof Credito)
          .reduce((total, credito) => total + credito.getValor(), 0);
    
        const totalDebitos = this.transacoes
          .filter((transacao) => transacao instanceof Debito)
          .reduce((total, debito) => total + debito.getValor(), 0);
    
        return totalCreditos - totalDebitos;
    }

    abstract getLimite(): number;

    depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        this.transacoes.push(credito);
    }

    sacar(valor: number): void {
        const saldoAposSaque = this.getSaldo() - valor;
        if (saldoAposSaque >= -this.getLimite()) {
          const debito = new Debito(valor, new Date());
          this.transacoes.push(debito);
        } else {
          throw new Error('Saldo insuficiente para realizar o saque.');
        }
    }

    getTransacoes(): (Debito | Credito)[]{
        return this.transacoes;
    }

    abstract calcularSaldo(): number;
}