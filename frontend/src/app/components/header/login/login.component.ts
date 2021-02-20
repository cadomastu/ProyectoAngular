import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<String>();

  public usuario: String
  public pass: String

  constructor() { }

  ngOnInit(): void {

  }

  activarComponenteLogin(){
    
    if (this.usuario==undefined && this.pass == undefined){
      alert("Usuario o contraseña incorrectos")
    }else{
      if (this.comprobarUsuario()==true){

          alert("Sesión iniciada")
          this.messageEvent.emit(this.usuario)

      }else{

          alert("Usuario o contraseña incorrectos")

      }
      
    }
   
  }
  activarComponenteReg(){
    alert("Has pulsado el boton de registro")
    this.messageEvent.emit("0")
  }


  comprobarUsuario(){
    return true
  }

}
