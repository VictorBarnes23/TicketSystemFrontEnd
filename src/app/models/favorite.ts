import { Ticket } from "./ticket";

export interface Favorite {
    id: number;
    ticketId: number;
    ticket: Ticket;
}
