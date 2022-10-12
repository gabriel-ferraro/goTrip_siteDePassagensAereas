import { LocaisService } from 'src/app/services/locais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from 'src/app/models/locais.model';

@Component({
  selector: 'app-excluir-local',
  templateUrl: './excluir-local.component.html',
  styleUrls: ['./excluir-local.component.css']
})
export class ExcluirLocalComponent implements OnInit {

  local: Local = new Local();

  constructor(private service: LocaisService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.buscarPorCodigo(Number(id)).subscribe(local => {
      this.local = local;
    });

  }

  excluirLocal() {
    this.service.excluir(this.local.codigo).subscribe(() => {
      this.router.navigate(['/admin/locais']);
    });
  }

}
