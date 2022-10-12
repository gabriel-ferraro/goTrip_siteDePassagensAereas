import { ClienteService } from 'src/app/services/cliente.service';
import { PassagemService } from 'src/app/services/passagem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passagem } from 'src/app/models/passagem.model';
import { Viagem } from 'src/app/models/viagem.model';
import { ViagemService } from 'src/app/services/viagem.service';
import { Cliente } from 'src/app/models/clinte.model';

@Component({
  selector: 'app-incluir-viagem',
  templateUrl: './incluir-viagem.component.html',
  styleUrls: ['./incluir-viagem.component.css']
})
export class IncluirViagemComponent implements OnInit {

  viagem: Viagem = new Viagem();
  passagens: Passagem[] = [];
  clientes: Cliente[] = [];

  constructor(private service: ViagemService,
    private passagemService: PassagemService,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  salvarViagem() {
    this.service.salvar(this.viagem).subscribe(() => {
      this.router.navigate(['/admin/viagens']);
    });
  }

  ngOnInit(): void {
    this.passagemService.listar().subscribe(passagem => {
      this.passagens = passagem;
    })
    this.clienteService.listar().subscribe(cliente => {
      this.clientes = cliente;
    });
  }

}
