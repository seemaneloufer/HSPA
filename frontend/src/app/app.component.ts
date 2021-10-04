import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  properties: any;
  ngOnInit(): void {
     this.http
       .get("data/properties.json")
       .subscribe((data) => console.log(data));

  }
  title = 'my-first-app';
}
