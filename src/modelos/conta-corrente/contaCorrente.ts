import { Conta } from "../conta/conta";
import { Credito } from "../credito/credito";
import { Debito } from "../debito/debito";

export class ContaCorrente extends Conta {
    private limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this.limite = limite;
    }

    getLimite(): number {
        return this.limite;
      }

    transferir(contaDestino: Conta, valor: number): void {
        if (valor <= this.getSaldo() + this.limite) {
            const saldoAposTransferencia = this.getSaldo() - valor;
                if (saldoAposTransferencia >= -this.limite) {
                    this.sacar(valor);
                    contaDestino.depositar(valor);
                } else {
                    throw new Error('Limite de crédito insuficiente para realizar a transferência.');
                }
        } else {
            throw new Error('Saldo insuficiente para realizar a transferência.');
        }
    }

    calcularSaldo(): number {
        let saldoCorrente = 0;

        for(const transacao of this.getTransacoes()){
            if(transacao instanceof Credito) {
                saldoCorrente += transacao.getValor();
            } else if(transacao instanceof Debito) {
                saldoCorrente -= transacao.getValor();
            }
        }

        return saldoCorrente + this.getLimite();
    }
}