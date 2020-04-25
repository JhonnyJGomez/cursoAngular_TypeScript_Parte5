import { Component, OnInit } from '@angular/core';
interface Clientes{
  nombre:string,
  apellido:string,
  edad:number  
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes:Array<Clientes> = new Array<Clientes>()

  constructor() { }

  ngOnInit(): void {
   this.clientes.push(
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
  }

  guardar(){
    localStorage.setItem("cliente", JSON.stringify(this.clientes))
  }

  leer(){
    this.clientes = JSON.parse(localStorage.getItem("cliente"))
    console.log(JSON.parse(localStorage.getItem("cliente")))
  }
}
