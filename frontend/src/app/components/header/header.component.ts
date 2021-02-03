import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activarComponenteInicio(){
    alert("Has pulsado el boton de inicio")
  }

  activarComponenteAdmin(){
    alert("Has pulsado el boton de administrador")
  }

}
