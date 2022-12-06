import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IOffer } from '../interfaces/offer';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  loadOffers() {
    return this.httpClient.get<IOffer[]>(`${apiUrl}/data/offers`);
  }

  loadUserOffers() {
    const userId = 'alabalaUserId' 
    // TODO add logic for getting userId
    return this.httpClient.get<IOffer[]>(`${apiUrl}/data/offers?where=_ownerId="${userId}"`);
  }
}
