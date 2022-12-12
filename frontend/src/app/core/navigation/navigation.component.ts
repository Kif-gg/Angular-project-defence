import { Component, Inject } from '@angular/core';
import { BehaviorSubject, debounce, debounceTime, filter, take } from 'rxjs';
import { AuthService } from 'src/app/authorization/auth.service';
import { BACKEND_ERROR } from 'src/app/shared/error';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

  backendError$ = this.backendError.asObservable();

  
  constructor(@Inject(BACKEND_ERROR) private backendError: BehaviorSubject<Error | null>, private authService: AuthService) {
    
    this.backendError$.pipe(debounceTime(0), take(1), filter(val => !val)).subscribe(() => {
      
    })
  }


}
