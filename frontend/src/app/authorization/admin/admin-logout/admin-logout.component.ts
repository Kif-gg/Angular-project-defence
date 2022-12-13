import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent {

  constructor(private router: Router, private authService: AuthService) {
    if (confirm('Are you sure you want to log out?') == true) {
      this.authService.user = null;
      this.router.navigate(['/']).then(() => window.location.reload());
    } else {
      this.router.navigate(['/o074dm1n/h1dd3n4ddr35s/570p/panel']);
      return;
    }
  }

}
