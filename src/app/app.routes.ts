import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { Proveedor } from './proveedor/proveedor';
import { Clientecomponent } from './cliente/cliente';
import { Brokercomponent } from './broker/broker';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path:'clientes' , component:Clientecomponent},
  { path: 'proveedor', component:Proveedor},
  { path: 'broker' , component:Brokercomponent},

];
