import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent  },
  { path: 'pedidos', component: PedidosComponent  },
  { path: 'agregar-clientes', component: AgregarClientesComponent  },
  { path: 'agregar-productos', component: AgregarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
