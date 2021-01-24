import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProducto: Producto | undefined;
  productos: Producto[] | undefined; 
  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.URL_API);
  }

  postProducto(Producto: Producto){
    return this.http.post(this.URL_API, Producto);

  }

  putProducto(Producto: Producto){
    return this.http.put(this.URL_API+`/${Producto._id}`, Producto);
  }

  deleteProducto(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
