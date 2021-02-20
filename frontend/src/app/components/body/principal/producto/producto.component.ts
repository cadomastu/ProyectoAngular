import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }
  
  public nombre: String = "Antena Parabolica"
  public urlFoto: String
  public descripcion: String
  public precio: Number
  public stock: Number

  ngOnInit(): void {
    
  }

}
