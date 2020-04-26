import { Component, OnInit } from '@angular/core';
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

  clientes:Array<Clientes> = new Array<Clientes>()
  productos:Array<Productos> = new Array<Productos>()
  constructor() { }

  ngOnInit(): void {
  /*  this.clientes.push(
       {
        nombre:"Maia",
        apellido:"Gómez Olaguibel",
        edad:2
      },
      {
        nombre:"Karen",
        apellido:"Olaguibel Rossi",
        edad:29
      },
      {
        nombre:"Jhonny",
        apellido:"Gómez Morales",
        edad:30
      })
       
    this.productos.push(
      {
        nombre:"Arroz",
        precio:2000
      },
      {
        nombre:"Maiz",
        precio:2100
      },
      {
        nombre:"pan",
        precio:300
      }) */
  }

  guardarClientes(){
    localStorage.setItem("clientes", JSON.stringify(this.clientes))
  }

  guardarProductos(){
    localStorage.setItem("productos", JSON.stringify(this.productos))
  }

  leer(){
    this.clientes = JSON.parse(localStorage.getItem("clientes"))
    this.productos = JSON.parse(localStorage.getItem("productos"))
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

}
