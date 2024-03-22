import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { TicketDTO } from '../../models/ticket-dto';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  constructor(private TicketService: TicketService){}

  formTicket: TicketDTO = {} as TicketDTO

  @Output() createEvent = new EventEmitter<TicketDTO>();

  createEmit(): void {
    this.createEvent.emit({...this.formTicket})
  }
  AddTicket():void {
    this.TicketService.addTicket(this.formTicket).subscribe((response:Ticket) => {
      this.createEvent.emit(response);
    })
  }
}
