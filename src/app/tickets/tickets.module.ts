import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNewTicketComponent } from './pages/page-new-ticket/page-new-ticket.component';
import { TicketsRoutingRoutingModule } from './tickets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageNewTicketComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TicketsModule { }
