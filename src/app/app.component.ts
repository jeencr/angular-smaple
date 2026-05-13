import { flatten } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'sample1';
  success_msg = false;

  contacts = [{
    'name':'user1',
    'place':'place1',
    'contact':78283827,
  },
{
    'name':'user2',
    'place':'place2',
    'contact':7246565827,
  },
  {
    'name':'user2',
    'place':'place2',
    'contact':7815151527,
  },

  
];
name = 'logan';

txtcolor = 'blue';
namefont = '100px';
clicked= false;

isLoggedIn = false;
salary = "";
tax = "";
income = 0;

incomeAmount(){
  this.income = Number(this.salary)-Number(this.tax)
}

hello(){
  console.log('Hello world')
  this.clicked = true;
}
  
todayDate = Date.now();
}
