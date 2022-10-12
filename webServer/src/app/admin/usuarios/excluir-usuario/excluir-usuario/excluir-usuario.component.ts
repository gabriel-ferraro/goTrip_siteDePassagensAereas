import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-excluir-usuario',
  templateUrl: './excluir-usuario.component.html',
  styleUrls: ['./excluir-usuario.component.css']
})
export class ExcluirUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(id)).subscribe(usuario => {
      this.usuario = usuario;
    });

  }

  excluirUsuario() {
    this.service.excluir(this.usuario.codigo).subscribe(() => {
      this.router.navigate(['/admin/usuarios']);
    });
  }


}
