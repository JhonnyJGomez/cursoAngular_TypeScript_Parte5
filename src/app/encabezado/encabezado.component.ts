import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(public pedidoServicioInyectado:PedidosService) { }

  ngOnInit(): void {
    
  }

}
