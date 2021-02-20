import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'frontend';
  usuario=''; // Elementos añadidos
  contraseña='';// Elementos añadidos
  modoPadre: number  = 1 // Selector modo que selecciona el componente a mostrar

/*
  1. Contenido principal: se muestran los productos existentes en la tienda
  2. Contenido administrador: se muestra un formulario en el que poder añadir productos
  3. Contenido añadir un nuevo usuaro: muestra un formulario con el que añadir un nuevo usuario
  4. Mostrará los elementos agregados al carrito por cada usuario.
  5. Contenido Historio de compras: Mostrará el historio de las compras para el usuario logado
*/

  constructor(){
    
  }

  mensaje: String

  ngOnInit(): void {

  }
  

  receiveMessage($event: String){
    this.mensaje=$event
  }

}

