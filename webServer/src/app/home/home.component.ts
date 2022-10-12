import { LocaisService } from '../services/locais.service';
import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/models/locais.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locais: Local[];

  constructor(private locaisService: LocaisService) { 
    this.locais = [];
  }

  ngOnInit(): void {
    this.locaisService.listar().subscribe(local => {
      this.locais = local;
    });
  }

}
