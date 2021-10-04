import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  properties: any;
  ngOnInit(): void {
     this.http
       .get("data/properties.json")
       .subscribe((data) => console.log(data));

  }


}
