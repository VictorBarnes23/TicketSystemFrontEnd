import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketDTO } from '../../models/ticket-dto';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resolution',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-resolution.component.html',
  styleUrl: './add-resolution.component.css'
})
export class AddResolutionComponent {
ticketResult: string = "";

constructor(private TicketService: TicketService){}

 @Output() updateEvent = new EventEmitter<string>();

  createEmit(): void {
    this.updateEvent.emit(this.ticketResult)
  }
  UpdateTicket():void {
    console.log(this.ticketResult)
  }
}
