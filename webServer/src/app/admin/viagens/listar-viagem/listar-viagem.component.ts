import { ViagemService } from 'src/app/services/viagem.service';
import { Component, OnInit } from '@angular/core';
import { Viagem } from 'src/app/models/viagem.model';


@Component({
  selector: 'app-listar-viagem',
  templateUrl: './listar-viagem.component.html',
  styleUrls: ['./listar-viagem.component.css']
})
export class ListarViagemComponent implements OnInit {

  viagens: Viagem[];
  colunas: string[] = ['codigo', 'passagem', 'cliente', 'total', 'acoes'];

  constructor(private service: ViagemService) {
    this.viagens = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(viagem => {
      this.viagens = viagem;
    })
  }

}
