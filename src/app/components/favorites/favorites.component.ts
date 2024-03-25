import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  constructor(private activatedRoute:ActivatedRoute, private favoriteService:FavoritesService) {}
  favesArray:Ticket[] = [];

  routeIdentifier() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let id = String(paramMap.get('id'));
      this.favoriteService.GetAllById(id).subscribe((response) => {
        this.favesArray = response;
      });
    });
  }

  ngOnInit() {
    this.routeIdentifier();
  }

}
