import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'child-2',
  styleUrls: [ './../../home/home.component.css' ],
  templateUrl: './child-2.component.html'
})
export class Child2Component implements OnInit {

  @Input() object;
  
  public ngOnInit() {

  }

}
