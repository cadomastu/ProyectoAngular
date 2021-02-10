import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  constructor() { }

  public message:string;

  ngOnChanges(changes: SimpleChanges) {
    
    if (this.message) {
      console.log(changes);
      alert("Se ha producido un cambio en message")
    }
   
  }

  activarComponenteInicio(){
    alert("Has pulsado el boton de inicio")
    this.message = "3"
    alert(this.message)
  }

  activarComponenteAdmin(){
    alert("Has pulsado el boton de administrador")
    this.message = "2"
    alert(this.message)
    this.modoPrueba()
  }

  receiveMessage($event: string){
    alert("He recivido el mensaje")
    this.message = $event
  }

  modoPrueba(){
    alert(this.message)
  }

}
