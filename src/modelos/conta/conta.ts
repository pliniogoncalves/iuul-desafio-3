export abstract class Conta{
    protected _numero: string;

    constructor(numero: string){
        this._numero = numero;
    }

    //metodos get

    getNumero():string{
        return this._numero;
    }
}