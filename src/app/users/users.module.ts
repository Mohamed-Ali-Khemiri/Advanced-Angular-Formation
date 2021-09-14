import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUserComponent } from './page/page-user/page-user.component';
import { PageSingleUserComponent } from './page/page-single-user/page-single-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    PageUserComponent,
    PageSingleUserComponent,
    UserDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UsersRoutingModule
  ],
  exports: [
    PageUserComponent,
    PageSingleUserComponent,
    UsersRoutingModule
  ]
})
export class UsersModule { }