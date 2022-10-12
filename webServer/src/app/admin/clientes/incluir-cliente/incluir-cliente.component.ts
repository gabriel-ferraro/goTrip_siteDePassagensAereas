import { Cliente } from 'src/app/models/clinte.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html',
  styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  usuarios: Usuario[] = [];

  constructor(private service: ClienteService, private usuarioService: UsuarioService, private router: Router) { }

  salvarCliente() {
    this.service.salvar(this.cliente).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
    });

  }

}