import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  totalElementos: number = 2

  ngOnInit(): void {
  }

  activarComponente(){

    alert("Has pulsado el boton del carrito")

  }
}
