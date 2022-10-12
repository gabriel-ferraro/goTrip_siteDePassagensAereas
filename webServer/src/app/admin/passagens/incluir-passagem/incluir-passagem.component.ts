
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passagem } from 'src/app/models/passagem.model';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-incluir-passagem',
  templateUrl: './incluir-passagem.component.html',
  styleUrls: ['./incluir-passagem.component.css']
})
export class IncluirPassagemComponent implements OnInit {

  passagem: Passagem = new Passagem();

  constructor(private service: PassagemService, private router: Router) { }

  salvarPassagem(){
    this.service.salvar(this.passagem).subscribe(() => {
      this.router.navigate(['/admin/passagens']);
    });
  }

  ngOnInit(): void {
  }

}
