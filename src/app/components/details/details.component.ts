import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { TicketDTO } from '../../models/ticket-dto';
import { AddResolutionComponent } from '../add-resolution/add-resolution.component';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, FormsModule, AddResolutionComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private TicketService: TicketService, private router:Router, private activatedRoute:ActivatedRoute, private socialAuthServiceConfig: SocialAuthService){}

ticketResult: TicketDTO = {} as TicketDTO;
resolutionText:string = "";
user: SocialUser = {} as SocialUser;
loggedIn: boolean = false;

  ngOnInit(){
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      let id = Number(paramMap.get("id"));
    this.callTicket(id);
    if(this.ticketResult == undefined){
      this.router.navigate(["/TicketNotFound"]);
    }
  })
  }
 
  callTicket(id:number){
    this.TicketService.GetById(id).subscribe((response:Ticket)=>{
      console.log(response);
      this.ticketResult = response;
    });
  }

  @Output() updateEvent = new EventEmitter<TicketDTO>();

  createEmit(): void {
    this.updateEvent.emit({...this.ticketResult})
  }
  UpdateTicket():void {
    this.TicketService.updateTicket(this.ticketResult).subscribe((response:Ticket) => {
      this.updateEvent.emit(response);
    })
  }
  updateTicketWithResolution(string:string) {
    this.ticketResult.resolution = string;
    this.ticketResult.completed = true;
    this.ticketResult.resolver = this.user.name;
    const updatedTicket:TicketDTO = {...this.ticketResult};
    this.TicketService.updateTicket(updatedTicket).subscribe((response:Ticket) =>{
      console.log(response)
    })
  }


}

