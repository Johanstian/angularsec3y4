import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1> {{title}} </h1>
<h3>La base es de: <strong>{{base}}</strong> </h3>

<button (click)="acumular(+base)">+{{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-base)">-{{base}}</button>
  `,
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  title:string = 'Contador App';
  numero:number = 10;
  base:number=5;

  acumular(valor:number){
    this.numero+=valor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
