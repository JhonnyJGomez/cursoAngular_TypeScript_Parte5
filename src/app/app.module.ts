import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { ClientesService } from './services/clientes.service';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosService } from './services/productos.service';
import { PedidosService } from './services/pedidos.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    EncabezadoComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientesService,
    ProductosService,
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
