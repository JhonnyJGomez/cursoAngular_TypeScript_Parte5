import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {
  formularioAgregar:FormGroup; 
  
  constructor(private fb:FormBuilder, public productosServicioInyectado: ProductosService) { }

  ngOnInit(): void {

    this.formularioAgregar = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      precio: ['',Validators.required]
    })
  }


  agregarProducto(){
    this.productosServicioInyectado.agregarLocalStorage(this.formularioAgregar.value)
    this.formularioAgregar.reset
  }
}
