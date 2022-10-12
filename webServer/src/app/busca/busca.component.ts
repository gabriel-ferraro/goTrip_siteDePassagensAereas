import { ComprarPassagemService } from './../services/comprarPassagem.service';
import { ComprarPassagemComponent } from './../comprar-passagem/comprar-passagem.component';
import { PassagemService } from 'src/app/services/passagem.service';
import { Passagem } from 'src/app/models/passagem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  fieldOrigem: string = 'origem';
  fieldDestino: string = 'destino';
  fieldPreco: string = 'crescente';
  passagens: Passagem[];

  origemInput: string = '';
  destinoInput: string = '';
  isIdaVoltaInput: boolean | null = true;
  idaInput: string | null = null;
  voltaInput: string | null = null;

  constructor(private service: PassagemService, private comprar: ComprarPassagemService, private route: ActivatedRoute, private router: Router) {
    this.passagens = [];
  }

  comprarPassagem(passagem: Passagem) {
    this.comprar.adicionarPassagem(passagem);
    this.router.navigate(['/comprar']);
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe(params => {
        this.origemInput = params.get('origem') || '';
        this.destinoInput = params.get('destino') || '';
        this.isIdaVoltaInput = Boolean(params.get('idaVolta')) || false;
        this.idaInput = params.get('ida') || '';
        this.voltaInput = params.get('volta') || '';
        console.log(`'Query params:' origem:${this.origemInput} - destino:${this.destinoInput} - éIdaEVolta:${this.isIdaVoltaInput} - dataIda:${this.idaInput} - dataVolta:${this.voltaInput}`);
      });

    this.service.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
  }

}
