import { Component, OnInit } from '@angular/core';
import { JsonPipe, PercentPipe } from '@angular/common';
interface Clientes{
  nombre:string,
  apellido:string,
  edad:number  
}
interface Productos{
  nombre:string,
  precio:number
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarClientes(){
    let clientesAgregar: Array<Clientes> = new Array();
    clientesAgregar.push(
    {
      nombre: "Maia",
      apellido: "Gómez",
      edad: 3
    },
    {
      nombre: "Karen",
      apellido: "Olaguibel",
      edad: 29
    }
    )
    localStorage.setItem("clientes", JSON.stringify(clientesAgregar))
  }

  guardarProductos(){
    let productosAgregar:Array<Productos> = new Array<Productos>();
    productosAgregar.push(
      {
        nombre:"Arroz",
        precio: 2100
      },
      {
        nombre:"Cebolla",
        precio: 450
      },
      {
        nombre:"lentejas",
        precio: 320
      }
    )
    localStorage.setItem("productos", JSON.stringify(productosAgregar))
  }

  eliminarClientes(){
    localStorage.removeItem("clientes")
  }

  eliminarProductos(){
    localStorage.removeItem("productos")
  }

  eliminarTodo(){
    localStorage.clear()
  }

  get clientesLocales(): Clientes[] {
    console.log("Cliente")
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"))
    if (clientesLocalStorage == null)
    {
      return new Array<Clientes>()
    }
    return clientesLocalStorage
  }

  get productosLocales(): Productos[]{
    console.log("productos")
    let productosLocalesStorage: Productos[] =  JSON.parse(localStorage.getItem("productos"))
    if (productosLocalesStorage == null){
      return new Array<Productos>()
    }
    return productosLocalesStorage
  }
}
