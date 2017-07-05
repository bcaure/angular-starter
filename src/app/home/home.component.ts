import {  Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public oneWay = null;
  
  public twoWay = null;

  constructor(
  ) {}

}
