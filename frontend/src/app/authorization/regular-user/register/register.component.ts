import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

  registerHandler(registerForm: NgForm): void {

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
