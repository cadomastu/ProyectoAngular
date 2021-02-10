import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  usuario=''; // Elementos añadidos
  contraseña='';// Elementos añadidos
  modoPadre: number = 2 // Selector modo que selecciona el componente a mostrar

  constructor(){}

}

