import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) { }

  registerHandler(registerForm: NgForm): void {
    if (registerForm.invalid) {
      return;
    }
    const { username, email, password, repass } = registerForm.value;
    this.authService.register(username, email, password, repass).subscribe(user => {
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

  repasstext = 'password';

  showRepass() {
    this.passtext = 'text';
  }

  hideRepass() {
    this.passtext = 'password';
  }
}
