import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  public nombre: String;
  public categoria: String;
  public descripcion: String;
  public precio: Number;
  public stock: Number;
  public urlFoto: String;

  public vacio: boolean

  ngOnInit(): void {
    
  }

  addProducto(){
    
  }

  EnviarBaseDatos(){
    this.comprobarCampos()
  }

  comprobarCampos(){
    this.vacio=false;

      if (this.nombre==undefined){
        this.vacio=true
      }
      if (this.categoria==undefined){
        this.vacio=true
      }
      if (this.descripcion==undefined){
        this.vacio=true
      }
      if (this.precio==undefined){
        this.vacio=true
      }
      if (this.stock==undefined){
        this.vacio=true
      }
      if (this.urlFoto==undefined){
        this.vacio=true
      }
      if (this.vacio==true){
        alert("Campos vacios")
      }
  }

}