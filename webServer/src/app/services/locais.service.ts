import { GenericCRUDService } from './generic.crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../models/locais.model';

@Injectable({
  providedIn: 'root'
})
export class LocaisService extends GenericCRUDService<Local> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/locaisHome");
  }
}
