export class PedidoDetalle{
    productoId:number;
    nombreProducto:string;
    cantidad:number;
    precio:number;
    total:number;

    constructor(){
        this.productoId = this.productoId;
        this.nombreProducto = this.nombreProducto;
        this.cantidad = this.cantidad;
        this.precio = this.precio;
        this.total = this.total;
    }

    agregarPedidoDetalle(pedido:PedidoDetalle){
        let agregarPedido: Array<PedidoDetalle> = new Array<PedidoDetalle>()
        agregarPedido.push(pedido)
    }
}