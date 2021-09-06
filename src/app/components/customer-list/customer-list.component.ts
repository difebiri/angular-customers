import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer: any = [];//TODO Cambiar a la interface

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      res => {
        this.customer =res;
      },
      err => console.log(err)
    )
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        res => {
          console.log(res);
          this.getCustomers();
        },
        err => console.error(err)
      )
  }

}
