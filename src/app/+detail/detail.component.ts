import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'detail',
  styleUrls: [ './detail.component.css' ],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  object;
  value;

  constructor() {
     this.object = {"inner": "init"};
  }

  public ngOnInit() {
  }

}
