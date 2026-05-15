import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {
name ="";
email ="";
phone ="";
address ="";

addCustomer(formValue:NgForm){

  console.log(formValue);
  console.log(formValue.value);

}
  constructor() { }

  ngOnInit(): void {
  }

}
