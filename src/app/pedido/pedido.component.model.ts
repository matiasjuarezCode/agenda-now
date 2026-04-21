
import { Producto } from '../producto/producto.component.model';

export interface Pedido {

    id: number;
    clienteId: number;
    productos: Producto[];
    total: number; 
}