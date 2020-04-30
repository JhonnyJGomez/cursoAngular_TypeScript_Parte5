import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor() { }

  agregarLocalStorage(cliente:Clientes){
    let clientesAntiguos: Clientes[] = this.clientesLocalStorage
    cliente.clienteID = clientesAntiguos.length + 1 
    clientesAntiguos.push(cliente)
    localStorage.setItem("clientes",JSON.stringify(clientesAntiguos))
  }

  get clientesLocalStorage():Clientes[]{
    let clientesdeLocalStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"))

    if (clientesdeLocalStorage == null){
      return new Array<Clientes>();  
    }
    return clientesdeLocalStorage;
  }
}
