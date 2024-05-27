import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrar: boolean[] = [true, true, true];
  link?: String;

  constructor(private location: Location) {
   }

  acionarmostrar(valor: number): any{
    this.link = this.location.path()
    switch(valor){
      case 0: return this.mostrar[0] = !this.mostrar[0];
      case 1: return this.mostrar[1] = !this.mostrar[1];
      case 2: return this.mostrar[2] = !this.mostrar[2];
    }
  }

  ngOnInit(): void {
    this.link = this.location.path()
  }

}
