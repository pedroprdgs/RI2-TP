import Endereco from "./endereco.js";
import Telefone from "./telefone.js";

export default class Cliente{
    constructor(
        private nome: string,
        private telefone: Telefone,
        private email: string,
        private endereco: Endereco
    ){}

    public getNome(): string{
        return this.nome
    }

    public getTelefone(): Telefone{
        return this.telefone
    }
    
    public getEmail(): string{
        return this.email
    }

    public getEndereco(): Endereco{
        return this.endereco
    }

    public setNome(nome: string): void{
        this.nome = nome
    }

    public setTelefone(telefone: Telefone): void{
        this.telefone = telefone
    }
    
    public setEmail(email: string): void{
        this.email = email
    }

    public setEndereco(endereco: Endereco): void{
        this.endereco = endereco
    }

    public get descricao(): string{
        return `---------------
Informações do Cliente:
${this.nome}
---------------
---------------
Telefone:
DDD: ${this.telefone.getDDD()}
Número: ${this.telefone.getNumero()}
---------------
Endereço:
Rua: ${this.endereco.getRua()}
Número: ${this.endereco.getNumero()}
Cidade: ${this.endereco.getCidade()}
Estado: ${this.endereco.getEstado()}
        `
    }
}