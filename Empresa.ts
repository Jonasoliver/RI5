import { Endereco } from "./Endereco";
import { Funcionario } from "./Funcionario";
import { Telefone } from "./Telefone";

export class Empresa {
    private razaoSocial: string;
    private nomeFantasia: string;
    private cnpj: string;
    private endereco: Endereco;
    private funcionarios: Funcionario[];
    private telefones: Telefone[];

    constructor(
        razaoSocial: string,
        nomeFantasia: string,
        cnpj: string,
        endereco: Endereco,
        funcionarios: Funcionario[],
        telefones: Telefone[]
    ) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
        this.telefones = telefones;
    }

    public getRazaoSocial(): string {
        return this.razaoSocial;
    }

    public getNomeFantasia(): string {
        return this.nomeFantasia;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public getEndereco(): Endereco {
        return this.endereco;
    }

    public getFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    public getTelefones(): Telefone[] {
        return this.telefones;
    }
}
