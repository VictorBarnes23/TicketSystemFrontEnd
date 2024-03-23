import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { TicketDTO } from '../../models/ticket-dto';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private TicketService: TicketService, private router:Router, private activatedRoute:ActivatedRoute){}

ticketResult: TicketDTO = {} as Ticket;
resolutionText:string = "";

  ngOnInit(){
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
  updateTicketWithResolution() {
    const updatedTicket:TicketDTO = {...this.ticketResult, resolution: this.resolutionText};
    this.TicketService.updateTicket(updatedTicket);
  }


}

