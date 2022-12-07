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
    this.authService.user = {
      username: 'Alabala'
    } as any;
    // TODO change this to user from database
    // this.router.navigate(['/']);
  }

}