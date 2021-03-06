import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Child2Component } from './child-2.component';

console.log('`Child2` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    Child2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Child2Component
  ]
})
export class Child2Module {
}
