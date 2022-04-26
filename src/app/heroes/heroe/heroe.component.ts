import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  nombre:string='Ironman';
  edad:number=45;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre():string{
    return this.nombre + '-' + this.edad;
  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  cambiarHeroe():void{
    this.nombre='Spiderman';
  }

  cambiarEdad():void{
    this.edad=25;
  }

}
