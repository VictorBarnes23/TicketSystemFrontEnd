import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private TicketService: TicketService, private router:Router, private activatedRoute:ActivatedRoute){}

ticketResult: Ticket = {} as Ticket

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
}

