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

    const { username, password } = loginForm.value;
    this.authService.login(username, password).subscribe(user => {
      this.router.navigate(['/']);
    });

  }

  passtext = 'password';

  showPass() {
    this.passtext = 'text';
  }

  hidePass() {
    this.passtext = 'password';
  }

}
