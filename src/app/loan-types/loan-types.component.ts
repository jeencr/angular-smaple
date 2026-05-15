import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
 
  constructor() { }
   addLoanTypeForm! : FormGroup

  ngOnInit(): void {
    this.addLoanTypeForm
  }

}
