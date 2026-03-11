import { Component } from '@angular/core';
import { Broker } from './broker.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-broker',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './broker.html',
  styleUrl: './broker.scss',
})
export class Brokercomponent {
  broker : Broker[] =[
    { id: 1, nombre: 'Juan' , comision:
      10, telefono: '123456' },
    { id: 2, nombre: 'Pedro' , comision:
      15, telefono: '78910' }, 
  ]

}
