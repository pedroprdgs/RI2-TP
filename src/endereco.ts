export default class Endereco{
    constructor(
        private estado: string,
        private cidade: string,
        private rua: string,
        private numero: number
    ){}

    public getEstado(): string{
        return this.estado;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public getRua(): string{
        return this.rua;
    }

    public getNumero(): number{
        return this.numero;
    }

    public setEstado(estado: string): void{
        this.estado = estado
    }

    public setCidade(cidade: string): void{
        this.cidade = cidade
    }

    public setRua(rua: string): void{
        this.rua = rua
    }

    public setNumero(numero: number): void{
        this.numero = numero
    }
}