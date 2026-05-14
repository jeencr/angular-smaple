import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {

   clientsLis =[
    {'clientId':1,'name':'clent1','phone':878291111},
    {'clientId':2,'name':'clent2','phone':456291111},
    {'clientId':3,'name':'clent3','phone':878254841},
    {'clientId':4,'name':'clent4','phone':878254861},
    {'clientId':5,'name':'clent5','phone':878298787},
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
