import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = {
    _id: '6393645801eed658592cf59c',
    username: 'Pesho',
    email: 'peshopesho@pesho.pesho'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
