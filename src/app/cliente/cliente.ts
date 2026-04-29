import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { cliente } from './cliente.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.scss'],
})
export class Clientecomponent {

  @Input() empresaId!: number;

 clientes: cliente [] = []

 editando: boolean = false;
 
 clienteForm: any = {
  id: 0,
  nombre: '',
  email: '',
  telefono: '',
  empresaId: 0

};

get clienteFiltrados() {
  return this.clientes.filter(c => c.empresaId === this.empresaId);
}
guardar() {
 this.clienteForm.empresaId = this.empresaId;
 
  if (!this.editando) {

    const nuevoCliente = {
      ...this.clienteForm,
      id: this.clientes.length + 1
    };

    this.clientes.push(nuevoCliente);

  } else {

    const index = this.clientes.findIndex(c => c.id === this.clienteForm.id);

    if (index !== -1) {
      this.clientes[index] = { ...this.clienteForm };
    }

    this.editando = false;
  }

  this.cancelar();
}
cancelar() {
  this.clienteForm = {
    id: 0,
    nombre: '',
    email: '',
    telefono: '',
    empresaId: 0
  };

  this.editando = false;
}
seleccionarParaEditar(cliente: any) {
  this.clienteForm = { ...cliente };
  this.editando = true;
}
eliminar(id: number) {
  this.clientes = this.clientes.filter(c => c.id !== id);
}
}
