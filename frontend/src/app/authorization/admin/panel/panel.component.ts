import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  usersList: IUser[] | null = null;

  constructor(private adminService: AdminService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.allUsersHandler();
  }

  allUsersHandler() {
    this.adminService.loadUsers().subscribe({
      next: (value) => {
        this.usersList = value;
        console.log(value);

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  detailsHandler(event: Event): void {
    const id = (event.target as HTMLElement).parentElement?.parentElement?.children[0].textContent;
    console.log(id);


    // this.router.navigate([`/data/offers/${id}`]);
  }
  
}
