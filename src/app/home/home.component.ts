import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clienteArray:Array<Clientes> = new Array<Clientes>()
  constructor(public clienteInyectado:ClientesService) { }

  ngOnInit(): void {
    this.clienteArray = this.clienteInyectado.clientesLocalStorage;
  }

  buscarCliente(nombre:string){
    this.clienteArray = this.clienteInyectado.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())
    })

  }

}
