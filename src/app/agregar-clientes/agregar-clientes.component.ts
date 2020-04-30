import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  formularioAgregar: FormGroup;
  clientes:Clientes = new Clientes();

  constructor(private fb:FormBuilder, public servicioInyectado:ClientesService) { }

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  agregarCliente(){
    this.clientes = this.formularioAgregar.value as Clientes
    this.formularioAgregar.reset()
    this.servicioInyectado.agregarLocalStorage(this.clientes)
  }
}

