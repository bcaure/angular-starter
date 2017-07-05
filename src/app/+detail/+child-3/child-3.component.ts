import { Component, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'child-3',
  styleUrls: [ './../../home/home.component.css' ],
  templateUrl: './child-3.component.html'
})
export class Child3Component {

  @Input() inner;
  @Output() change = new EventEmitter<string>();
  
  onChange(value:string) {
    this.change.emit(value);
  }

}
