import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { OfferService } from '../../services//offers/offer.service';
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
    this.offerHandler();
  }

  id = '';
  offerHandler() {
    this.activatedRoute.params.subscribe(
      (params: Params) => { this.id = params['id'] }
    );
    this.offerService.loadOfferById(this.id).subscribe({
      next: (value) => {

        this.offerDetails = value;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  deleteOfferHandler(): void {

  }

  saveEditedHandler(updateForm: NgForm): void {
    if (confirm('Are you sure you want to update current offer\'s data?') == true) {

      this.formSubmitted = true;
      if (updateForm.invalid) {
        return;
      }
      const { price, year, description, imageUrl, phoneNumber } = updateForm.value;
      console.log(this.id, price, year, description, imageUrl, phoneNumber);

      this.offerService.updateOffer(this.id, price, year, description, imageUrl, phoneNumber)
        .subscribe(() => {
          
        });
      this.toggleEditMode();
    } else {
      return;
    }
  }

  cancelEditing() {
    this.toggleEditMode()
    return;
  }

  toggleEditMode(): void {
    this.offerHandler();
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.formSubmitted = false;
    }

  }

}
