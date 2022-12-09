import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { OfferService } from 'src/app/services/offer.service';
import { IOffer } from 'src/app/shared/interfaces/offer';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  editMode = false;
  formSubmitted = false;

  get user() {
    return this.authService.user;
  }

  offerDetails: IOffer | null = null;
  constructor(private activatedRoute: ActivatedRoute, private offerService: OfferService, private authService: AuthService) { }

  ngOnInit(): void {
    let id = 'alabala';
    this.activatedRoute.params.subscribe(
      (params: Params) => { id = params['id'] }
    );
    this.offerService.loadOfferById(id).subscribe({
      next: (value) => {   

        this.offerDetails = value;        
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  detailsHandler() {
    
  }

  deleteHandler(): void {

  }

  saveEditedHandler(updateForm: NgForm): void {
    this.formSubmitted = true;
    if (updateForm.invalid) {
      return;
    }
    const { price, year, description, imageUrl, phoneNumber } = updateForm.value;
    this.offerDetails = { price, year, description, imageUrl, phoneNumber } as any;
    this.toggleEditMode();
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }
    console.log(this.offerDetails);
    
  }

}
