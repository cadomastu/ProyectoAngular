import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public usuario: String

  @Output() messageEvent = new EventEmitter<String>();

  constructor() { }

  //Mensajes predifinidos de hijo a padre
  public admin: String = "2"
  public inicio: String = "1"
  public compras: String = "5"

  //Metodos de llamada

  activarComponenteInicio(){
     this.messageEvent.emit(this.inicio)
  }

  activarComponenteAdmin(){
    this.messageEvent.emit(this.admin)
  }
  
  misCompras(){
    this.messageEvent.emit(this.compras)
  }
  
  modoPrueba(){
   
  }

}
