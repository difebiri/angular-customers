import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component'
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CustomerListComponent
  },{
    path: 'customer/add',
    component: CustomerFormComponent
  },
  {
    path: 'customer/edit/:id',
    component: CustomerFormComponent,
    children:[
      {
        path:'loan',
        component: LoanListComponent
      }
    ]
  },{
    path: 'loan/edit/:id',
    component: LoanFormComponent
  },
  {
    path:'loan/add/:id',
    component: LoanFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
