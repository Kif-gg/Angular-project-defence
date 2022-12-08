import { Component, OnInit } from '@angular/core';
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

  deleteHandler(): void {

  }

  editHandler(): void {

  }

}
