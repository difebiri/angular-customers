import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPopper } from 'angular-popper';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { CustomerService } from './services/customer.service';
import { LoanService } from './services/loan.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomerFormComponent,
    LoanFormComponent,
    CustomerListComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPopper,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    LoanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
