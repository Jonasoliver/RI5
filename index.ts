import { Descritor } from "./descritorEmpresa";
import { Empresa } from "./Empresa";
import { Endereco } from "./Endereco";
import { Funcionario } from "./Funcionario";
import { Telefone } from "./Telefone";

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone = new Telefone('011', '9-9999-9999');
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa('ABC LTDA', 'Mercado online', '999-999-999-999-99', endereco, funcionarios, telefones);

let descritor = new Descritor();
descritor.descrever(empresa);
