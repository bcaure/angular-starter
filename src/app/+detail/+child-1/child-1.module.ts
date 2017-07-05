import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Child1Component } from './child-1.component';

console.log('`Child1` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    Child1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Child1Component
  ]
})
export class Child1Module {
}
