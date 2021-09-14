import { NgModule } from '@angular/core';
import { PageUserComponent } from './page/page-user/page-user.component';
import { PageSingleUserComponent } from './page/page-single-user/page-single-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageUserComponent},
  { path: ':id', component: PageSingleUserComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
