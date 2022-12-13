import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  @ViewChild(
    NgForm,
    { static: true }
  ) loginForm!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService, private router: Router) { }


  loginHandler(loginForm: NgForm): void {
    if (loginForm.invalid) {
      return
    }

    const { email, password, pin } = loginForm.value;
    this.authService.adminLogin(email, password, pin).subscribe(admin => {
      this.authService.user = admin;
      this.router.navigate(['/o074dm1n/h1dd3n4ddr35s/570p/panel']);
    })


  }

  passtext = 'password';

  showPass() {
    this.passtext = 'text';
  }

  hidePass() {
    this.passtext = 'password';
  }

  pintext = 'password';

  showPIN() {
    this.pintext = 'text';
  }

  hidePIN() {
    this.pintext = 'password';
  }

}
