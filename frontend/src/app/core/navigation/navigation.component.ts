import { Component } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private router: Router, private authService: AuthService) {
   }

}
