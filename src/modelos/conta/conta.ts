export abstract class Conta{
    private numero: string;

    constructor(numero: string){
        this.numero = numero;
    }

    //metodos get

    getNumero():string{
        return this.numero;
    }
}