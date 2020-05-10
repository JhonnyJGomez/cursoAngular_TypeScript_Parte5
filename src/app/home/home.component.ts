import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clienteArray:Array<Clientes> = new Array<Clientes>()
  pedido:Pedidos = new Pedidos()
  constructor(public clienteInyectado:ClientesService, public PedidoServiceInyectado:PedidosService, public route:Router) { }

  ngOnInit(): void {
    this.clienteArray = this.clienteInyectado.clientesLocalStorage;
  }

  buscarCliente(nombre:string){
    this.clienteArray = this.clienteInyectado.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())
    })

  }
  irAProductos(cliente:Clientes){
    this.PedidoServiceInyectado.pedido.clienteID = cliente.clienteID
    this.PedidoServiceInyectado.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellidos}`
    this.route.navigateByUrl("/productos")
    
  }

}
