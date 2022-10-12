import { Cliente } from './clinte.model';
import { Passagem } from './passagem.model';

export class Viagem {
    codigo: number = 0;
    cliente: Cliente = new Cliente();
    passagem: Passagem = new Passagem();
    total: Number = 0;
}