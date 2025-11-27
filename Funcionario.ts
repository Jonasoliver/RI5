import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Funcionario {
    private nome: string;
    private matricula: string;
    private cpf: string;
    private endereco: Endereco;
    private telefone: Telefone;

    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    public getNome(): string {
        return this.nome;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getEndereco(): Endereco {
        return this.endereco;
    }

    public getTelefone(): Telefone {
        return this.telefone;
    }
}
