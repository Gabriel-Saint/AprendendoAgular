import { IAddress } from "./address.interface";
import { IStatus } from "./status.inteface";

export interface IUser {   
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: IAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: IStatus;
}