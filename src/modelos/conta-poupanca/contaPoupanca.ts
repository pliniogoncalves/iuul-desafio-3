import { Conta } from "../conta/conta";
import { Credito } from "../credito/credito";
import { Debito } from "../debito/debito";

export class ContaPoupanca extends Conta {
    constructor(numero: string){
        super(numero);
    }

    getLimite(): number {
        return 0;
      }

    calcularSaldo(): number {
        let saldoPoupanca = 0;

        for(const transacao of this.getTransacoes()) {
            if(transacao instanceof Credito) {
                saldoPoupanca += transacao.getValor();
            } else if(transacao instanceof Debito) {
                saldoPoupanca -= transacao.getValor();
            }
        }

        return saldoPoupanca;
    }
}