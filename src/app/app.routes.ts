import { Routes } from '@angular/router';
import { TicketComponent } from './component/ticket/ticket.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: "", component:TicketComponent},
    {path: "Tickets", redirectTo:"", pathMatch:"full"},
    {path: "Tickets/:id", component:DetailsComponent}
];
