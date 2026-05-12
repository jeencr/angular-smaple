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
  
}
