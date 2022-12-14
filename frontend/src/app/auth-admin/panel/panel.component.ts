import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  usersList: IUser[] | null = null;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.allUsersHandler();
  }

  changeStyle(event: Event) {
    const el = (event.target as HTMLElement).parentElement;
    
    const elsiblings = Array.from(el!.children);

    for (let sibling of elsiblings) {
      sibling.classList.remove('active');
    }
    (event.target as HTMLElement).classList.add('active');
  }

  allUsersHandler() {
    this.adminService.loadUsers().subscribe({
      next: (value) => {
        this.usersList = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  blockedUsersHandler() {
    this.adminService.loadBlockedUsers().subscribe({
      next: (value) => {
        this.usersList = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  detailsHandler(event: Event): void {
    const id = (event.target as HTMLElement).parentElement?.children[1].textContent;

    this.router.navigate([`/o074dm1n/h1dd3n4ddr35s/570p/panel/${id}`]);
  }
  
}
