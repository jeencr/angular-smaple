import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'title of the user component'



  constructor() { }

  ngOnInit(): void {
  }

  updateVal(){

  }

}
