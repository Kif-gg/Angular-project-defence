import { Injectable } from '@angular/core';
import { IAdmin } from '../shared/interfaces/admin';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  // user: IUser | null = {
  //   _id: '6393645801eed658592cf59c',
  //   username: 'Bob',
  //   email: 'Bob@abv.bg'
  // } as any;

  admin: IAdmin | null = null;

  // admin: IAdmin | null = {
  //   _id: '638b38f932475472f4651dd2',
  //   email: 'rbs_administration@admin.com',
  //   pin: '14552405',
  // } as any;


  get isAdmin() {
    return this.admin !== null;
  }

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
