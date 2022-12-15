import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { OfferService } from 'src/app/services/offers/offer.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent {

  @ViewChild(
    NgForm,
    { static: true }
  ) createOffer!: ElementRef<HTMLFormElement>;



  constructor(private offerService: OfferService, private router: Router, private authService: AuthService) { }

  createOfferHandler(createOfferForm: NgForm): void {
    if (createOfferForm.invalid) {
      return;
    }
    const { brand, model, price, year, description, imageUrl, phoneNumber } = createOfferForm.value;

    const _ownerId = this.authService.user?._id!;

    this.offerService.createOffer(brand, model, price, year, description, imageUrl, phoneNumber, _ownerId)
      .subscribe(() => {
      
      })
      this.router.navigate(['/data/offers']);
  }

  selectedBrandValue = '';

  onSelectedBrandHandler(value: string): void {
    this.selectedBrandValue = value;
  }

  selectedModelValue = '';

  onSelectedModelHandler(value: string): void {
    this.selectedModelValue = value;
  }


}
