import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'detail',
  styleUrls: [ './detail.component.css' ],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  object;
  object2;

  constructor() {
    this.object = {"inner": "init"};
    this.object2 = {"inner": "init"};
  }

  public ngOnInit() {
  }

}
