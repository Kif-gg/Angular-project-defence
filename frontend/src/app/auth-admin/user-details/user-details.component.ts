import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUser | null = null;
  formSubmitted = false;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService, private authService: AuthService) { }

  @ViewChild(
    NgForm,
    { static: true }
  ) editUserForm!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.userHandler();
  }

  userId = 'alabala';
  userHandler() {
    this.activatedRoute.params.subscribe(
      (params: Params) => { this.userId = params['userId'] }
    );
    this.adminService.loadUserById(this.userId).subscribe({
      next: (value) => {

        this.userDetails = value;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  deleteProfileHandler(): void {
    if (confirm('Are you sure you want to delete this user\'s account? THIS CANNOT BE UNDONE!')) {
      this.adminService.deleteUser(this.userId).subscribe(() => {

      });
    }
  }

  cancelEditing() {
    this.toggleEditMode()
    return;
  }

  saveEditedHandler(updateForm: NgForm): void {
    
    
    if (confirm('Are you sure you want to update this profile\'s data?') == true) {
      
      this.formSubmitted = true;
      if (updateForm.invalid) {
        return;
      }
      const { username, email } = updateForm.value;
      this.adminService.editUser(this.userId, username, email, this.userDetails!.blocked).subscribe(() => {

      })
      this.toggleEditMode();
    } else {
      return;
    }
  }

  changeBlockedVal() {
    this.userDetails!.blocked = !this.userDetails!.blocked
  }
  
  toggleEditMode(): void {
    console.log(this.userDetails?.blocked);
    this.userHandler();
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }
  }

}
