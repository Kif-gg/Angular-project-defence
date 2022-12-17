import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, filter, Subscription, tap, throwError } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));
  
  user: IUser | null = null;
  
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
    return this.http.post<IUser>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/l091n`, { email, password, pin })
      .pipe(tap(user => {
        this.user$$.next(user)
      }));
  }

  adminLogout() {
    return this.http.get<void>(`${apiUrl}/o074dm1n/h1dd3n4ddr35s/570p/logout`)
      .pipe(tap(() => {
        this.user$$.next(null)
      }));
  }

  // ==========================================
  // ==========================================

  register(username: string, email: string, password: string, repass: string) {
    return this.http.post<IUser>(`${apiUrl}/users/register`, { username, email, password, repass })
      .pipe(tap(user => {
        this.user$$.next(user)
      }));
  }

  login(username: string, password: string) {
    return this.http.post<IUser>(`${apiUrl}/users/login`, { username, password })
      .pipe(tap(user => {
        this.user$$.next(user)
      }));
  }

  getProfile() {
    return this.http.get<IUser>(`${apiUrl}/users/profile`)
      .pipe(
        tap(user => {
          this.user$$.next(user)
        }
          ),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }

  updateProfile(id: string, username: string, email: string) {
    return this.http.put<IUser>(`${apiUrl}/users/profile`, { id, username, email })
      .pipe(tap(user => this.user$$.next(user)));
  }

  deleteProfile() {
    return this.http.delete<any>(`${apiUrl}/users/profile`)
      .pipe(tap(() => {
        this.user$$.next(null)
      }));
  }

  logout() {
    return this.http.get<void>(`${apiUrl}/users/logout`)
      .pipe(tap(() => {
        this.user$$.next(null)
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
