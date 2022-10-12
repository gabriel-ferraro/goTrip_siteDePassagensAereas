import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Viagem } from '../models/viagem.model';
import { GenericCRUDService } from './generic.crud.service';

@Injectable({
  providedIn: 'root'
})
export class ViagemService extends GenericCRUDService<Viagem> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/viagem");
  }
}