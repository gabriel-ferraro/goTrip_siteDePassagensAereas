
import { Cliente } from 'src/app/models/clinte.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(id)).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  atualizarCliente() {
    this.service.atualizar(this.cliente.codigo, this.cliente).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

}
