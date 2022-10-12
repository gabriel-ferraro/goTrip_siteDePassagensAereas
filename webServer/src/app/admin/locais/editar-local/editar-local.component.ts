import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaisService } from 'src/app/services/locais.service';
import { Local } from 'src/app/models/locais.model';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})
export class EditarLocalComponent implements OnInit {

  local: Local = new Local();

  constructor(private service : LocaisService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(id)).subscribe(local => {
      this.local = local;
    });

  }

  atualizarLocal() {
    this.service.atualizar(this.local.codigo, this.local).subscribe(() => {
      this.router.navigate(['/admin/locais']);
    });
  }

}
