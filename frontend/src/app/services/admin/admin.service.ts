import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser } from '../../shared/interfaces/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  loadUsers() {
    return this.httpClient.get<IUser[]>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/users`);
  }

  searchUsersByUsername(username: string) {
    return this.httpClient.get<IUser[]>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/users?where=username="${username}"`);
  }

  loadBlockedUsers() {
    return this.httpClient.get<IUser[]>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/users/blocked`);
  }

  loadUserById(id: string) {
    return this.httpClient.get<IUser>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/users/${id}`)
  }

}
