import { PedidoDetalle } from './pedido-detalle'
import { Productos } from './productos'

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

    agregarProducto(producto:Productos){

        let pedidoDetalle:PedidoDetalle = new PedidoDetalle()
        
        pedidoDetalle.productoId = producto.productoID
        pedidoDetalle.nombreProducto = producto.nombre
        pedidoDetalle.cantidad = 1
        pedidoDetalle.precio = producto.precio
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio
        let index:number = this.pedidoDetalle.filter(algunoDelosProductos=> algunoDelosProductos.productoId == producto.productoID).length
 
        if (index>0){
            let posicion:number = this.pedidoDetalle.findIndex(algunoDeLosProductos => algunoDeLosProductos.productoId == producto.productoID)
            this.pedidoDetalle[posicion].cantidad ++
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * pedidoDetalle.precio
        }else{
            this.pedidoDetalle.push(pedidoDetalle)
        }


        
    }
}