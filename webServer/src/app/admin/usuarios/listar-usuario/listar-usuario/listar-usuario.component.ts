import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  colunas: string[] = ['codigo', 'nome', 'email', 'perfil', 'acoes'];

  constructor(private service: UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(usuario => {
      this.usuarios = usuario;
    })
  }

}
