import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pedido } from './pedido.model';
import { Producto } from '../producto/producto.component.model';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.scss'],
})
export class PedidoComponent {

  pedidos: Pedido[] = []; 

  
productosDisponibles: Producto[] = [
  { id: 1, nombre: 'Producto A', precio: 100, stock: 10 },
  { id: 2, nombre: 'Producto B', precio: 200, stock: 5 }

];

  productoSeleccionadoId: number = 0;

  editando: boolean = false;

  pedidoForm: Pedido = {
    id: 0,
    clienteId: 0,
    productos: [],
    total: 0,
    
 
  };

  seleccionarParaEditar(pedido: Pedido) {
  this.pedidoForm = { ...pedido };
  this.editando = true;
}




  agregarProducto () {
      
      const producto = this.productosDisponibles.find(p => p.id === this.productoSeleccionadoId);

      if (producto) {
        this.pedidoForm.productos.push(producto);
        this.calcularTotal();
      }
  }

  calcularTotal () {
    this.pedidoForm.total = this.pedidoForm.productos.
    reduce((acc, p) => acc + p.precio, 0);
  }

  guardar() {
    if (!this.editando) {

      const nuevoPedido: Pedido = {
        ...this.pedidoForm,
        id: this.pedidos.length + 1
      };

      this.pedidos.push(nuevoPedido);

    } else {

      const index = this.pedidos.findIndex(p => p.id === this.pedidoForm.id);

      if (index !== -1) {
        this.pedidos[index] = { ...this.pedidoForm };
      }

      this.editando = false;
    }

    this.cancelar();
  }

  cancelar() {
    this.pedidoForm = {
    id: 0,
    clienteId: 0,
    productos: [],
    total: 0
    };

    this.editando = false;
  }



  eliminar(id: number) {
    this.pedidos = this.pedidos.filter(p => p.id !== id);
  }
}