import { Conta } from "../conta/conta";
import { Credito } from "../credito/credito";
import { Debito } from "../debito/debito";

export class ContaCorrente extends Conta {
    constructor(numero: string, limite: number) {
        super(numero, limite)
    }

    transferir(contaDestino: Conta, valor: number): void {
        if(valor <= this.saldo) {
            this.sacar(valor);
            contaDestino.depositar(valor);
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