import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Cliente } from 'src/app/models/clinte.model';
import { Passagem } from 'src/app/models/passagem.model';
import { Viagem } from 'src/app/models/viagem.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { PassagemService } from 'src/app/services/passagem.service';
import { ViagemService } from 'src/app/services/viagem.service';

@Component({
  selector: 'app-editar-viagem',
  templateUrl: './editar-viagem.component.html',
  styleUrls: ['./editar-viagem.component.css']
})
export class EditarViagemComponent implements OnInit {

  viagem: Viagem = new Viagem();
  clientes: Cliente[] = [];
  passagens: Passagem[] = [];

  constructor(private service: ViagemService,
    private clienteService: ClienteService,
    private passagemService: PassagemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  atualizarViagem() {
    this.service.atualizar(this.viagem.codigo, this.viagem).subscribe(() => {
      this.router.navigate(['/admin/viagens']);
    });
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(cliente => {
      this.clientes = cliente
    });
    this.passagemService.listar().subscribe(passagem => {
      this.passagens = passagem;
    });
    const str = this.route.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(str)).subscribe((viagem) => {
      this.viagem = viagem;
    });
  }

}
