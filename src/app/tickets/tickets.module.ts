import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNewTicketComponent } from './pages/page-new-ticket/page-new-ticket.component';
import { TicketsRoutingRoutingModule } from './tickets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageNewTicketComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingRoutingModule,
    ReactiveFormsModule
  ]
})
export class TicketsModule { }
