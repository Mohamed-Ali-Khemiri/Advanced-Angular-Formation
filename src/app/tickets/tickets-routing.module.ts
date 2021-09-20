import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNewTicketComponent } from './pages/page-new-ticket/page-new-ticket.component';

const routes: Routes = [
  { path: '', component: PageNewTicketComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingRoutingModule { }
