import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarLocalStorage(producto:Productos){
    let productosAntiguos: Productos[] = this.productosLocalStorage
    producto.productoID = productosAntiguos.length + 1 
    productosAntiguos.push(producto)
    localStorage.setItem("productos",JSON.stringify(productosAntiguos))
  }

  get productosLocalStorage():Productos[]{
    let productosdeLocalStorage: Productos[] = JSON.parse(localStorage.getItem("productos"))

    if (productosdeLocalStorage == null){
      return new Array<Productos>();  
    }
    return productosdeLocalStorage;
  }
}
