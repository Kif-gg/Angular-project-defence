import { Component } from '@angular/core';
import { AuthService } from 'src/app/authorization/auth.service';

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
 constructor(private authService: AuthService) { }


}
