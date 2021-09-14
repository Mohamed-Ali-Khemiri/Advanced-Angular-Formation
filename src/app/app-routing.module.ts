import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { PageUserComponent } from './users/page/page-user/page-user.component';

const routes: Routes = [
  { path: 'user', component: PageUserComponent },
  { path: 'home', component: PageHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
