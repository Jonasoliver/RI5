export class Endereco {
    private numero: number;
    private rua: string;
    private bairro: string;
    private cidade: string;

    constructor(numero: number, rua: string, bairro: string, cidade: string) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getRua(): string {
        return this.rua;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public getCidade(): string {
        return this.cidade;
    }
}
