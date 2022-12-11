import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../../auth.service';

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

  ngOnInit(): void {
    this.userHandler();
  }

  userHandler() {
    let id = 'alabala';
    this.activatedRoute.params.subscribe(
      (params: Params) => { id = params['userId'] }
    );
      this.adminService.loadUserById(id).subscribe({
        next: (value) => {
          
          this.userDetails = value;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  deleteProfileHandler(): void {

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
      this.authService.user = {
        username, email
      } as any;
      this.toggleEditMode();
    } else {
      return;
    }
  }

  toggleEditMode(): void {
    this.userHandler();
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }
  }

}
