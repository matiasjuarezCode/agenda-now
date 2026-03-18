import { Component } from '@angular/core';
import { Broker } from './broker.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-broker',
  imports: [CommonModule, FormsModule],
  standalone:  true,
  templateUrl: './broker.html',
  styleUrl: './broker.scss',
})
export class Brokercomponent{
  broker : Broker[] =[
    { id: 1, nombre: 'Juan' , comision:
      10, telefono: '123456' },
    { id: 2, nombre: 'Pedro' , comision:
      15, telefono: '78910' }, 
  ]
brokerForm: any = {
  id: 0,
  nombre: '',
  comision: 0,
  telefono: ''
};

brokers: Broker[] = [];

editando: boolean = false;

guardar() {

  if (!this.editando) {

    const nuevoBroker = {
      ...this.brokerForm,
      id: this.brokers.length + 1
    };

    this.brokers.push(nuevoBroker);

  } else {

    const index = this.brokers.findIndex(b => b.id === this.brokerForm.id);

    if (index !== -1) {
      this.brokers[index] = { ...this.brokerForm };
    }

    this.editando = false;
  }

  this.cancelar();
}

cancelar() {
  this.brokerForm = {
    id: 0,
    nombre: '',
    comision: 0,
    telefono: ''
  };

  this.editando = false;
}
seleccionarParaEditar(broker: any) {
  this.brokerForm = { ...broker };
  this.editando = true;
}
eliminar(id: number) {
  this.brokers = this.brokers.filter(b => b.id !== id);
}
}
