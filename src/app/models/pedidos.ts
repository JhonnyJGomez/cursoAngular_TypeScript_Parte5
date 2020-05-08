import { PedidoDetalle } from './pedido-detalle'

export class Pedidos{
    pedidoID:number
    clienteID:number
    nombreCliente:string 
    total:number
    pedidoDetalle:Array<PedidoDetalle>

    constructor(){
        this.pedidoID = this.pedidoID; 
        this.pedidoID = this.pedidoID;
        this.nombreCliente = this.nombreCliente;
        this.total = this.total;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
}