import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.css']
})
export class NuevoUserComponent implements OnInit {

  usuario: string
  contraseña: string
  repcontraseña: string

  constructor() { }

  ngOnInit(): void {
  }

}
