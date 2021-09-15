import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdminComponent } from './page-admin/page-admin.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PageAdminComponent},
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

