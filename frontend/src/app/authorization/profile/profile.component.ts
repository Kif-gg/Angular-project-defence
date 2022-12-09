import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get user() {
    const { username, email } = this.authService.user!;
    return { username, email }
  }

  @ViewChild(
    NgForm,
    { static: true }
  ) createOffer!: ElementRef<HTMLFormElement>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  editUserHandler(editForm: NgForm) {
    if (editForm.invalid) {
      return;
    }
  }

}
