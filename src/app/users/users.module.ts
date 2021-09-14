import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUserComponent } from './page/page-user/page-user.component';



@NgModule({
  declarations: [
    PageUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UsersModule { }
