import { Component, OnInit, Input } from '@angular/core';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Child2` component loaded asynchronously');

@Component({
  selector: 'child-2',
  styleUrls: [ './../../home/home.component.css' ],
  templateUrl: './../../home/home.component.html'
})
export class Child2Component implements OnInit {

  @Input() model;

  constructor () {

  }

  public ngOnInit() {

  }

}
