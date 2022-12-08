import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
      _id: 'adjwiaow99a4daw48d',
      username: 'Alabala'
    } as any;
    this.router.navigate(['/']);
  }

}
