import { Cliente } from './../models/clinte.model';
import { ComprarPassagemService } from './../services/comprarPassagem.service';
import { Component, OnInit } from '@angular/core';
import { Passagem } from '../models/passagem.model';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ClienteService } from '../services/cliente.service';
import { Viagem } from '../models/viagem.model';

@Component({
  selector: 'app-comprar-passagem',
  templateUrl: './comprar-passagem.component.html',
  styleUrls: ['./comprar-passagem.component.css']
})
export class ComprarPassagemComponent implements OnInit {

  passagem: Passagem;
  cliente: Cliente = new Cliente();

  constructor(private comprarService: ComprarPassagemService,
    private router: Router,
    private authService: AuthService,
    private clienteService: ClienteService
  ) {
    this.passagem = comprarService.getPassagens();
  }

  aumentarQtdePessoas(){
    this.passagem.qtde_pessoas++;
  }

  diminuirQtdePessoas(){
    if (this.passagem.qtde_pessoas > 1){
      this.passagem.qtde_pessoas--;
    } else{
      console.log("A passagem deve ter ao menos um passageiro")
    }
  }

  cancelarCompra(){
    this.router.navigate(['/busca']);
  }

  async confirmarCompra() {
    if (this.authService.isAutenticado()) {
      const viagem = new Viagem();
      console.log(viagem);
      viagem.cliente = this.cliente;
      viagem.passagem = this.comprarService.getPassagens()
      const total  = this.passagem.qtde_pessoas * this.passagem.preco;
      viagem.total = Number(total.toFixed(2));
      this.comprarService.confirmar(viagem)
        .pipe(catchError((err) => {
          this.router.navigate(['/']);
          return throwError(() => new Error(err));
        })
        ).subscribe(() => {
          this.router.navigate(['/sucesso']);
        });

    } else {
      this.router.navigate(['/login']);
    }
  }


  ngOnInit(): void {
    this.passagem = this.comprarService.passagem;

    if (this.authService.isAutenticado()){
      const codigo = this.authService.usuarioLogado.codigo;
      this.clienteService.buscarPorCodigo(codigo).subscribe((cliente) => {
        this.cliente = cliente;
      });
    }

  }

}
