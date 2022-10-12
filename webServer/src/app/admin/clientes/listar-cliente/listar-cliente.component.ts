import { Cliente } from 'src/app/models/clinte.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[];
  colunas: string[] = ['codigo', 'nome', 'idade', 'saldoCarteira', 'usuario', 'acoes'];

  constructor(private service: ClienteService) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(cliente => {
      this.clientes = cliente;
    });
  }
}