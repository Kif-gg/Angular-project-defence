import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  loginHandler(): void {
    // TODO change this to user from database
    this.authService.user = {
      username: 'Alabala'
    } as any;
    this.router.navigate(['/']);
  }

}
