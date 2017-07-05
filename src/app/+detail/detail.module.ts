import { Child1Module } from './+child-1/child-1.module';
import { Child2Module } from './+child-2/child-2.module';
import { Child3Module } from './+child-3/child-3.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    Child1Module,
    Child2Module,
    Child3Module
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule {
  public static routes = routes;
}
