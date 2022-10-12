import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passagem } from '../models/passagem.model';
import { GenericCRUDService } from './generic.crud.service';

@Injectable({
  providedIn: 'root'
})
export class PassagemService extends GenericCRUDService<Passagem> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/passagem");
  }
}