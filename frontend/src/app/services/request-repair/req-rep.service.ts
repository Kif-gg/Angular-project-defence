import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRepair } from 'src/app/shared/interfaces/repair';

import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReqRepService {

  constructor(private httpClient: HttpClient) { }


  createRequest(imageUrl: string, problem: string, brandmodel: string, phoneNumber: string, _ownerId: string) {
    return this.httpClient.post<IRepair>(`${apiUrl}/data`, { imageUrl, problem, brandmodel, phoneNumber, _ownerId });
  }
}
