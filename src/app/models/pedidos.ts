import { PedidoDetalle } from './pedido-detalle'

export class Pedidos{
    pedidoID:number
    clienteID:number
    nombreCliente:string 
    total:number
    pedidoDetalle:Array<PedidoDetalle>
}