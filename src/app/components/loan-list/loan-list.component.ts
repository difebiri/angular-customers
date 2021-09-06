import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  @Input() id_customer:any;

  loan: any = {
    id: 0,
    id_customer: 1,
    date_request:  new Date(),
    request_amount: 0
  };

  loans: any = [];

//TODO Cambiar a la interface

  constructor(private loanService: LoanService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getLoan(this.loan.id_customer);
  }

  getLoan(id: string){
    this.loanService.getLoanByCustomer(id)
        .subscribe(
          res => {
            console.log(res);
            this.loans = res;
          },
          err => console.log(err)
        )
  }

  DeleteLoan(id: string) {
    const params = this.activatedRoute.snapshot.params;
    this.loanService.deleteLoan(id)
      .subscribe(
        res => {
          console.log(res);
          this.getLoan(params.id_customer);
        },
        err => console.error(err)
      )
  }

}
