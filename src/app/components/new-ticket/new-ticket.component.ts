import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { TicketDTO } from '../../models/ticket-dto';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  constructor(private TicketService: TicketService, private socialAuthServiceConfig: SocialAuthService){}
  
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  formTicket: TicketDTO = {} as TicketDTO

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }

  @Output() createEvent = new EventEmitter<TicketDTO>();

  createEmit(): void {
    this.createEvent.emit({...this.formTicket});
  }

  AddTicket():void {
    if (this.loggedIn) {
      this.formTicket.name = this.user.name;
    }
    else {
      this.formTicket.name = "guest";
    }
    this.TicketService.addTicket(this.formTicket).subscribe((response:Ticket) => {
      this.createEvent.emit(response);
    })
  }
}
