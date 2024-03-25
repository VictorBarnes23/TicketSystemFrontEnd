import { Routes } from '@angular/router';
import { TicketComponent } from './component/ticket/ticket.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    {path: "", component:TicketComponent},
    {path: "Tickets", redirectTo:"", pathMatch:"full"},
    {path: "Tickets/:id", component:DetailsComponent},
    {path: "Favorites/:id", component:FavoritesComponent}
];
