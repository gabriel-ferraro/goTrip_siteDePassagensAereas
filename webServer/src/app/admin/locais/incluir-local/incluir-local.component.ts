import { LocaisService } from 'src/app/services/locais.service';
import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/models/locais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-local',
  templateUrl: './incluir-local.component.html',
  styleUrls: ['./incluir-local.component.css']
})
export class IncluirLocalComponent implements OnInit {

  local: Local = new Local();

  constructor(private service: LocaisService, private router: Router) { }

  salvarLocal(){
    this.service.salvar(this.local).subscribe(() => {
      this.router.navigate(['/admin/locais']);
    });
  }

  ngOnInit(): void {
  }

}
