import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'title of the user component'

  contacts = [{
    'id':1,
    'name':'user1',
    'place':'place1',
    'contact':78283827,
  },
{
    'id':2,
    'name':'user2',
    'place':'place2',
    'contact':7246565827,
  },
  {
    'id':3,
    'name':'user2',
    'place':'place2',
    'contact':7815151527,
  },

  
];

user:any;
user_id = 0;
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{
    const tempid = params;
    this.user_id =Number(tempid.id)
this.user = this.contacts.find(c=>c.id===this.user_id);


    }
    )
  }




  ngOnInit(): void {
    console.log(this.user);

  }

  updateVal(){

  }

}
