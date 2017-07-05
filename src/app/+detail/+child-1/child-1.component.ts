import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'child-1',
  styleUrls: [ './../../home/home.component.css' ],
  templateUrl: './child-1.component.html'
})
export class Child1Component implements OnInit {

  @Input() value;
  @Input() object;
  
  public ngOnInit() {

  }

}
