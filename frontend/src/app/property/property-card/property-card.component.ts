import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }
  Property:any={
    'id':1,
    'name':'Seemas Villa',
    'type':'House',
    'price':100000
  }

  ngOnInit(): void {
  }

}
