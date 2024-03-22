import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  constructor(private TicketService: TicketService){}

  formTicket: Ticket = {} as Ticket

  @Output() createEvent = new EventEmitter<Ticket>();

  createEmit(): void {
    this.createEvent.emit({...this.formTicket})
  }
  AddOrder():void {
    this.TicketService.addTicket(this.formTicket).subscribe((response:Ticket) => {
      this.createEvent.emit(response);
    })
  }
}
