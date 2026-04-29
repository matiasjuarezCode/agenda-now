import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from './producto.component.model';
import { PedidoComponent } from '../pedido/pedido.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent {

  productos: Producto[] = []; // ✅ nombre consistente

  editando: boolean = false;

  productoForm: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    
 
  };

  guardar() {
    if (!this.editando) {

      const nuevoProducto: Producto = {
        ...this.productoForm,
        id: this.productos.length + 1
      };

      this.productos.push(nuevoProducto);

    } else {

      const index = this.productos.findIndex(p => p.id === this.productoForm.id);

      if (index !== -1) {
        this.productos[index] = { ...this.productoForm };
      }

      this.editando = false;
    }

    this.cancelar();
  }

  cancelar() {
    this.productoForm = {
       id: 0,
    nombre: '',
    precio: 0,
    stock: 0
    };

    this.editando = false;
  }

  seleccionarParaEditar(producto: Producto) {
    this.productoForm = { ...producto };
    this.editando = true;
  }

  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}