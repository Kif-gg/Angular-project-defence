import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IAdmin } from '../shared/interfaces/admin';
import { IUser } from '../shared/interfaces/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));

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

  subscription: Subscription;



  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  adminLogin(email: string, password: string, pin: string) {
    return this.http.post<IAdmin>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/l091n`, {email, password, pin});
  }

  adminLogout() {
    return this.http.get<void>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/logout`)
  }

  // ==========================================

  register(username: string, email: string, password: string, repass: string) {
    return this.http.post<IUser>(`${apiUrl}/users/register`, { username, email, password, repass })
    .pipe(tap(user => this.user$$.next(user)));
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${apiUrl}/users/login`, { username, password })
    .pipe(tap(user => this.user$$.next(user)));;
  }

  getProfile() {
    return this.http.get<IUser>(`${apiUrl}/users/${this.user?._id}/profile`)
    .pipe(
      tap(() => this.user$$.next(null)),
      catchError((err) => {
        this.user$$.next(null);
        return of(err); //[err]
      })
    );
  }

  logout() {
    return this.http.get<void>(`${apiUrl}/users/logout`)
    .pipe(tap(() => this.user$$.next(null)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
