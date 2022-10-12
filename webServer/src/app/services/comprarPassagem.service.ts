import { Passagem } from './../models/passagem.model';
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Viagem } from '../models/viagem.model';

@Injectable({
    providedIn: 'root'
})

export class ComprarPassagemService {

    passagem: Passagem;
    URL = 'http://localhost:3000/viagem';

    constructor(private http: HttpClient, private authService: AuthService) {
        this.passagem = this.getPassagens();
    }

    adicionarPassagem(passagem: Passagem) {
        this.passagem = passagem;
    }

    getPassagens(){
        return this.passagem;
    }

    confirmar(viagem: Viagem): Observable<Viagem> {
        let headers = new HttpHeaders();
        if (this.authService.isAutenticado()) {
            headers = headers.set('Authorization', `Bearer ${this.authService.usuarioLogado.token}`);
        }
        return this.http.post<Viagem>(this.URL, viagem, { headers: headers });
    }
}