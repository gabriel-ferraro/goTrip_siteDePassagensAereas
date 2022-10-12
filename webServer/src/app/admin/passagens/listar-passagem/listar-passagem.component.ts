import { Component, OnInit } from '@angular/core';
import { Passagem } from 'src/app/models/passagem.model';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-listar-passagem',
  templateUrl: './listar-passagem.component.html',
  styleUrls: ['./listar-passagem.component.css']
})

export class ListarPassagemComponent implements OnInit {

  passagens: Passagem[];
  colunas: string[] = ['codigo', 'origem', 'destino', 'preco', 'data_ida', 'data_volta', 'acoes'];

  constructor(private service: PassagemService) {
    this.passagens = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
  }

}
