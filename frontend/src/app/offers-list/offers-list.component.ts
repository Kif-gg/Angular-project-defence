import { Component, OnInit } from '@angular/core';
import { IOffer } from '../interfaces/offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offersList: IOffer[] | null = null;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.loadOffers().subscribe({
      next: (value) => {
        this.offersList = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
