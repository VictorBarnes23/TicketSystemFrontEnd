import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketComponent } from './component/ticket/ticket.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TicketComponent,NewTicketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicketSystemFrontEnd';
}
