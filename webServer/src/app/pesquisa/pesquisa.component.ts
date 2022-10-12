import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  isIdaVolta: boolean = true;

  myControl = new FormControl();
  options: string[] = ['Curitiba', 'Florianópolis', 'Rio de Janeiro', 'São Paulo', 'Cuiabá'];
  filteredOptions!: Observable<string[]>;

  origemInput: string = '';
  destinoInput: string = '';
  data_idaInput: Date | any = '';
  data_voltaInput: Date | any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  clickOnIdaVolta() {
    this.isIdaVolta = true;
    if (this.btnStyle == 'botao-ida-click') {
      this.btnStyle = 'botao-ida-default';
    } else {
      this.btnStyle = 'botao-ida-click';
    }
  }

  clickOnIda() {
    this.isIdaVolta = false;
  }

  btnStyle = 'botao-ida-default';

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  goBusca() {
    this.router.navigate(['/busca'], {
      queryParams:
      {
        origem: this.origemInput,
        destino: this.destinoInput,
        idaVolta: this.isIdaVolta,
        ida: this.data_idaInput,
        volta: this.data_voltaInput
      }
    });
  }

}
