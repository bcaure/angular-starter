import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Child3Component } from './child-3.component';


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    Child3Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Child3Component
  ]
})
export class Child3Module {
}
