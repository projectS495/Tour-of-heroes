import { Component } from '@angular/core';

// this is the metadata a componet 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// this is the class
export class AppComponent {
  title = 'Tour of Heroes';
  name = 'Sandra Alejo';
}
