import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private TicketService: TicketService){}

  ticketsResult:Ticket[] = []

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.TicketService.GetAllTickets().subscribe((response:Ticket[]) => {
      console.log(response);
      this.ticketsResult = response;
    });
  }

}
