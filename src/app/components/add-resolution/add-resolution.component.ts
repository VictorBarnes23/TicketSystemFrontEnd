import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketDTO } from '../../models/ticket-dto';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-add-resolution',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-resolution.component.html',
  styleUrl: './add-resolution.component.css'
})
export class AddResolutionComponent {
ticketResult: string = "";

user: SocialUser = {} as SocialUser;
loggedIn: boolean = false;

constructor(private TicketService: TicketService, private socialAuthServiceConfig: SocialAuthService){}

 @Output() updateEvent = new EventEmitter<string>();

 ngOnInit() {
  //authState is a custom observable that will run again any time changes are noticed.
  this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
    this.user = userResponse;
    //if login fails, it will return null.
    this.loggedIn = (userResponse != null);
  });
}

  createEmit(): void {
    this.updateEvent.emit(this.ticketResult)
  }
  UpdateTicket():void {
    console.log(this.ticketResult)
  }
}
