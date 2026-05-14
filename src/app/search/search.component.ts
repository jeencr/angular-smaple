import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  color = "";
  price = 0;
  size = 'medium';

  constructor(private activatedRoute:ActivatedRoute ) { 
    this.activatedRoute.queryParams.subscribe(parms=>{
      console.log(parms);
       this.color = parms.color;
       this.size = parms.size;
       this.price = parms.price;
    })
  }

  ngOnInit(): void {
  }

}
