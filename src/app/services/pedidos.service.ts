import { Injectable } from '@angular/core';
import { Pedidos } from '../models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
pedido:Pedidos = new Pedidos()
  constructor() { }
}
