import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { FavoriteModel } from '../models/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  url:string = "https://localhost:7207/api"
  constructor(private http:HttpClient) { }

  GetAllById(id:string):Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.url}/Favorites?id=${id}`)
  }

  AddFavorite(fav:FavoriteModel):Observable<FavoriteModel> {
    return this.http.post<FavoriteModel>(`${this.url}/Favorites`, fav)
  }

}
