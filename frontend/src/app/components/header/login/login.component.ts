import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  public usuario: String
  public pass: String

  constructor() { }

  ngOnInit(): void {

  }

  activarComponenteLogin(){
    
    alert("Usuario: "+this.usuario)
    alert("Contraseña: "+this.pass)
    this.messageEvent.emit("1")
  }
  activarComponenteReg(){
    alert("Has pulsado el boton de registro")
    this.messageEvent.emit("0")
  }

}
