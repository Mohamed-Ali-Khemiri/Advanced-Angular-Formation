import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
