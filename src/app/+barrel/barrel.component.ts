import {  Component,} from '@angular/core';

@Component({
  selector: 'barrel',
  templateUrl: './barrel.component.html',
})
export class BarrelComponent {

  object;
  constructor() {
    this.object = {"inner":"init"};
  }

  async() {
    return new Promise((resolve) => 
      setTimeout(() => resolve("examples"), 5000)
    );   
  }
}
