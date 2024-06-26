import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { TicketDTO } from '../models/ticket-dto';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url:string = "https://localhost:7207/api"
  constructor(private http:HttpClient) { }

  GetAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.url}/Tickets`);
  }

  GetById(id:number):Observable<Ticket> {
    return this.http.get<Ticket>(`${this.url}/Tickets/${id}`);
  }

  addTicket(newTicket:TicketDTO):Observable<Ticket>{
    return this.http.post<Ticket>(`${this.url}/Tickets`,newTicket);
  }

  updateTicket(Ticket:TicketDTO):Observable<Ticket>{
    return this.http.put<Ticket>(`${this.url}/Tickets/${Ticket.id}`,Ticket);
  }
}
