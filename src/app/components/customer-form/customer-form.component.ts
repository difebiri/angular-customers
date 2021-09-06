import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';


import { Router, ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
//TODO Cambiar a la interface
  customer: any = {
    id: 0,
    name: '',
    birthdate:  new Date()
  };

  edit: boolean = false;

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.customerService.getCustomer(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.customer = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  createCustomer() {
    delete this.customer.id;
    this.customerService.createCustomer(this.customer)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/customers']);
        },
        err => console.error(err)
      )
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer.id, this.customer)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/customers']);
        },
        err => console.error(err)
      )
  }

  showLoan(){
    const params = this.activatedRoute.snapshot.params
    this.router.navigate(['loan'+params.id], {relativeTo : this.activatedRoute})
  }

  addLoan(){
    const params = this.activatedRoute.snapshot.params

    this.router.navigate(['loan/add/'+params.id])
  }

}
