import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
//TODO Cambiar a la interface
loan: any = {
  id: 0,
  name: '',
  birthdate:  new Date()
};

edit: boolean = false;

constructor(private loanSerice: LoanService, private router: Router, private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  const params = this.activatedRoute.snapshot.params;
  if (params.id) {
    this.loanSerice.getLoan(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.loan = res;
          this.edit = true;
        },
        err => console.log(err)
      )
  }
}

createLoan() {
  delete this.loan.id;
  this.loanSerice.createLoan(this.loan)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/customers']);
      },
      err => console.error(err)
    )
}

updateLoan() {
  this.loanSerice.updateLoan(this.loan.id, this.loan)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/customers']);
      },
      err => console.error(err)
    )
}

}
