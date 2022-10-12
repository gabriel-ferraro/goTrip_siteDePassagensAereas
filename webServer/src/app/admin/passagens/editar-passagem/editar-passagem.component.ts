
import { PassagemService } from 'src/app/services/passagem.service';
import { Passagem } from 'src/app/models/passagem.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-passagem',
  templateUrl: './editar-passagem.component.html',
  styleUrls: ['./editar-passagem.component.css']
})
export class EditarPassagemComponent implements OnInit {

  passagem: Passagem = new Passagem();

  constructor(private service: PassagemService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(id)).subscribe(passagem => {
      this.passagem = passagem;
    });

  }

  atualizarPassagem() {
    this.service.atualizar(this.passagem.codigo, this.passagem).subscribe(() => {
      this.router.navigate(['/admin/passagens']);
    });
  }
}
