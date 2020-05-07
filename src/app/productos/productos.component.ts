import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos:Array<Productos> = new Array<Productos>();
  constructor(public productosServicioInyectado:ProductosService) { }

  ngOnInit(): void {

    this.productos = this.productosServicioInyectado.productosLocalStorage
  }

}
