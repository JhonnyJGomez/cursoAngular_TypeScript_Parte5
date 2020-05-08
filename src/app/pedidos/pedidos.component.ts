import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pedido:Pedidos = new Pedidos();
    pedido.pedidoID =1;
    pedido.clienteID = 1;
    pedido.nombreCliente = "Jhonny"
    pedido.total = 5000
    pedido.pedidoDetalle.push({
      productoId:1,
      nombreProducto: 'Maiz',
      precio: 3000,
      cantidad: 1,
      total: 3000
    },
    {
      productoId:2,
      nombreProducto: 'Arroz',
      precio: 1000,
      cantidad: 2,
      total: 2000
    })
    console.log(pedido)
  }
}
