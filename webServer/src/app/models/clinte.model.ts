import { Usuario } from "./usuario.model";

export class Cliente {
    codigo: number = 0;
    usuario: Usuario = new Usuario();
    nome: string = '';
    idade: number = 0;
    saldoCarteira: number = 0;
}