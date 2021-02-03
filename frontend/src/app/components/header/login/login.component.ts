import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activarComponenteLogin(){
    alert("Has pulsado el boton de login")
  }
  activarComponenteReg(){
    alert("Has pulsado el boton de registro")
  }

}
