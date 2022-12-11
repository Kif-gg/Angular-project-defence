import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @ViewChild(
    NgForm,
    { static: true }
  ) loginForm!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private authService: AuthService) {
  }

  loginHandler(loginForm: NgForm): void {

    // TODO change this to user from database
    if (loginForm.invalid) {
      return
    }

    this.authService.user = {
      _id: '6391c96cdbd998ad505235e7',
      username: 'Bob',
      email: 'bob@abv.bg'
    } as any;
    this.router.navigate(['/']);
  }

  passtext = 'password';

  showPass() {
    this.passtext = 'text';
  }

  hidePass() {
    this.passtext = 'password';
  }

}
