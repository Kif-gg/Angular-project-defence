import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = {
    username: 'Pesho',
    email: 'peshopesho@pesho.pesho'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
