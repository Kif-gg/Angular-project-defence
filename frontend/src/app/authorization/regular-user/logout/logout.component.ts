import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private authService: AuthService) {
    if (confirm('Are you sure you want to log out?') == true) {
      this.authService.logout().subscribe({
        next: () => {
          this.router.navigate(['/users/login']);
        },
        error: () => {
          this.router.navigate(['/users/login']);
        }
      })
    } else {
      this.router.navigate(['/']);
      return;
    }
  }

}
