import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {


  menu: boolean = true;

  menuts(): boolean{
    return this.menu = !this.menu;
  }

  title = 'orcaseinfra';
}
