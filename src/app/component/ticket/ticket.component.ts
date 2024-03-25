import { Component, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { NewTicketComponent } from '../../components/new-ticket/new-ticket.component';
import { RouterLink } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteModel } from '../../models/favorite';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, NewTicketComponent, RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private TicketService: TicketService, private socialAuthServiceConfig: SocialAuthService, private favoriteService:FavoritesService){}

  ticketsResult:Ticket[] = []
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  newFav:FavoriteModel = {} as FavoriteModel;
 

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.TicketService.GetAllTickets().subscribe((response:Ticket[]) => {
      console.log(response);
      this.ticketsResult = response;
    });
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });

  }

  addFavorites(f:FavoriteModel) {
    this.favoriteService.AddFavorite(f).subscribe((response) => {
      this.callApi();
    });
  }

  createFavorite(t:Ticket) {
    this.newFav = {
      id: 0,
      userId: this.user.id,
      ticketId: t.id
    };
    this.addFavorites(this.newFav);
  }

}
