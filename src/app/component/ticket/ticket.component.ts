import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { NewTicketComponent } from '../../components/new-ticket/new-ticket.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, NewTicketComponent, RouterLink],
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
