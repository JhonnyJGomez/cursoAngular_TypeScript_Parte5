import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos:Array<Productos> = new Array<Productos>();
  constructor(public productosServicioInyectado:ProductosService, public PedidoServiceInyectado:PedidosService) { }

  ngOnInit(): void {

    this.productos = this.productosServicioInyectado.productosLocalStorage
    console.log(this.PedidoServiceInyectado.pedido)
  }

  buscarProductos(nombreProducto){
    //Teno el obejot = Usando el servio de productos. Uso la variable local que trae lo del get y filtro todos los productos 
    // y lo de vuelvo a todos aquellos productos.nombre en minuscula incluya el nombre a buscar tambien en minuscular
    this.productos =  this.productosServicioInyectado.productosLocalStorage.filter(productos=>{
      return productos.nombre.toLocaleLowerCase().includes(nombreProducto.toLocaleLowerCase());
    })
  }  
}
