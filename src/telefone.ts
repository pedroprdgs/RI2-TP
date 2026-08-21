export default class Telefone{
    constructor(
        private ddd: number,
        private numero: number
    ){}

    public getDDD(): number{
        return this.ddd
    }

    public getNumero(): number{
        return this.numero
    }

    public setDDD(ddd: number): void{
        this.ddd = ddd
    }

    public setNumero(numero: number): void{
        this.numero = numero
    }
}