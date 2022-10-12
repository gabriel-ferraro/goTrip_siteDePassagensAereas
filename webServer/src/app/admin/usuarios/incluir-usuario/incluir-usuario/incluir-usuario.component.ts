import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-incluir-usuario',
  templateUrl: './incluir-usuario.component.html',
  styleUrls: ['./incluir-usuario.component.css']
})
export class IncluirUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router) { }

  salvarUsuario(){
    this.service.salvar(this.usuario).subscribe(() => {
      this.router.navigate(['/admin/usuarios']);
    });
  }

  ngOnInit(): void {
  }


}
