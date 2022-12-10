import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editMode = false;
  formSubmitted = false;

  get user() {
    const { username, email } = this.authService.user!;
    return { username, email }
  }

  @ViewChild(
    NgForm,
    { static: true }
  ) updateUser!: ElementRef<HTMLFormElement>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }
  }

  saveUserDataHandler(updateForm: NgForm): void {
    this.formSubmitted = true;
    if (updateForm.invalid) {
      return;
    }
    const { username, email } = updateForm.value;
    this.authService.user = {
      username, email
    } as any;
    this.toggleEditMode();
  }

  deleteProfileHandler() {
    
  }


}
