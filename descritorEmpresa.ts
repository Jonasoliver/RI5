import { Empresa } from "./Empresa";

export class Descritor {
    public descrever(empresa: Empresa): void {
        console.log(`Razão social: ${empresa.getRazaoSocial()}`);
        console.log(`Nome fantasia: ${empresa.getNomeFantasia()}`);
        console.log(`cnpj: ${empresa.getCnpj()}`);
        console.log("Endereço");
        const endereco = empresa.getEndereco();
        console.log(`Rua: ${endereco.getRua()} Bairro: ${endereco.getBairro()} Cidade: ${endereco.getCidade()} numero: ${endereco.getNumero()}`);
        console.log("");
        console.log("funcionários:");
        
        empresa.getFuncionarios().forEach(funcionario => {
            console.log(`Nome: ${funcionario.getNome()}`);
            console.log(`matricula: ${funcionario.getMatricula()}`);
            console.log(`cpf: ${funcionario.getCpf()}`);
            const funcEndereco = funcionario.getEndereco();
            console.log(`Rua: ${funcEndereco.getRua()} Bairro: ${funcEndereco.getBairro()} Cidade: ${funcEndereco.getCidade()} numero: ${funcEndereco.getNumero()}`);
            console.log("");
        });
    }
}
