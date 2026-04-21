import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProveedorComponent } from './proveedor/proveedor';
import { Clientecomponent } from './cliente/cliente';
import { Brokercomponent } from './broker/broker';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path:'clientes' , component:Clientecomponent},
  { path: 'proveedor', component:ProveedorComponent},
  { path: 'broker' , component:Brokercomponent},
  { path: 'producto' , component:ProductoComponent},
  { path: 'pedido' , component:PedidoComponent}

];
