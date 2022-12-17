import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editMode = false;
  deleteMode = false;
  formSubmitted = false;

  get user() {

    let email = '';
    let username = '';
    if (this.authService.user) {
      email = this.authService.user.email
      username = this.authService.user.username
      return {username, email}
    } else {
      return {username, email};
    }
  }

  @ViewChild(
    NgForm,
    { static: true }
  ) updateUser!: ElementRef<HTMLFormElement>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }
  }

  id = this.authService.user?._id;
  
  saveUserDataHandler(updateForm: NgForm): void {
    if (confirm('Are you sure you want to update your current profile data?') == true) {

      this.formSubmitted = true;
      if (updateForm.invalid) {
        return;
      }
      if (this.id) {
        const { username, email } = updateForm.value;
        this.authService.updateProfile(this.id, username, email).subscribe(() => {

        });
        this.toggleEditMode();
      } else {
        return;
      }
    }
  }

  cancelEditing() {
    this.toggleEditMode()
    return;
  }

  deleteProfileHandler() {
    if (confirm('Are you sure you want to delete your profile? THIS CANNOT BE UNDONE!')){
      this.authService.deleteProfile().subscribe(() => {

      });
      this.router.navigate(['/users/login']);
    }
  }
}
