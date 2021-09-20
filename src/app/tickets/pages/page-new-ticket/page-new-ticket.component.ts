import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket, Ticket2 } from '../../models/model-ticket';

@Component({
  selector: 'app-page-new-ticket',
  templateUrl: './page-new-ticket.component.html',
  styleUrls: ['./page-new-ticket.component.css']
})
export class PageNewTicketComponent implements OnInit {
  buyTicketForm! : FormGroup;
  // tableTickets : Ticket[] = [];

  constructor(private fb: FormBuilder) {
    this.buyTicketForm = this.fb.group(
      {
        emailControl: [null, [Validators.required]],
        phoneControl: [null],
        address:this.fb.group({
          streetControl : [],
          postalcodeControl: []
        }),
        tickets:this.fb.array([this.createTicket()],Validators.required)
      }
    )
  }

  ngOnInit(): void {
  }

  createTicket():FormGroup{

    return this.fb.group({
      name:[null,Validators.required],
      age:[null,Validators.required]
    })
  }

  get tickets():FormArray{
    return <FormArray> this.buyTicketForm.get('tickets');
  }

  addTicket() {
    this.tickets.push(this.createTicket());
  }
  buyTickets() {
    if(this.buyTicketForm.status == 'VALID'){
      console.log(this.buyTicketForm.value);
    }
  }

  // buyTickets(){
  //   const val = this.buyTicketForm.value;
  //   const valTickets = [] as Ticket2[];
  //   console.log('val ## form =>>', val);
  //   // val.tickets.forEach(element => {
  //   //   valTickets.push({name: element.name, age: element.age})
  //   // });
  //   this.tableTickets.push({
  //     email: val.emailControl,
  //     phone: val.phoneControl,
  //     address :{
  //       street: val.address.streetControl,
  //       postalCode: val.address.postalcodeControl,
  //     },
  //     tickets : valTickets
  //   });
  // }

}
