import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IOffer } from '../../shared/interfaces/offer';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  loadOffers() {
    return this.httpClient.get<IOffer[]>(`${apiUrl}/data/offers`);
  }

  loadOffersByParams(brand: string | undefined, model: string | undefined, fromPrice: number | undefined, toPrice: number | undefined, fromYear: number | undefined, toYear: number | undefined, keyWord: string | undefined) {
    return this.httpClient.get<IOffer[]>(`${apiUrl}/data/offers?brand=${brand}&model=${model}&fromPrice=${fromPrice}&toPrice=${toPrice}&fromYear=${fromYear}&toYear=${toYear}&keyword=${keyWord}`);
  }

  loadUserOffers(userId: string) {
    return this.httpClient.get<IOffer[]>(`${apiUrl}/data/offers?where=_ownerId="${userId}"`);
  }

  loadOfferById(id: string) {
    return this.httpClient.get<IOffer>(`${apiUrl}/data/offers/${id}`);
  }

  createOffer(brand: string, model: string, price: number, year: number, description: string, imageUrl: string, phoneNumber: string, _ownerId: string) {
    return this.httpClient.post<IOffer>(`${apiUrl}/data/offers`, { brand, model, price, year, description, imageUrl, phoneNumber, _ownerId });
  }

  updateOffer(id: string, price: number, year: number, description: string, imageUrl: string, phoneNumber: string) {
    console.log('request made!');

    return this.httpClient.put<any>(`${apiUrl}/data/offers/${id}`, { price, year, description, imageUrl, phoneNumber });
  }

  deleteOffer(id: string) {
    return this.httpClient.delete<IOffer>(`${apiUrl}/data/offers/${id}`);
  }
}
