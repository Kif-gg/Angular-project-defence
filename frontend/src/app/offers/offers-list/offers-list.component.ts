import { Component, OnInit } from '@angular/core';
import { IOffer } from '../../shared/interfaces/offer';
import { OfferService } from '../../services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offersList: IOffer[] | null = null;

  constructor(private offerService: OfferService, private router: Router) { }

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
  selectedValue = '';
  onSelectedHandler(value: string): void {
    this.selectedValue = value;
  }

  detailsHandler(event: Event): void {
    const id = (event.target as HTMLElement).parentElement?.children[0].textContent;
    
    this.router.navigate([`/data/offers/${id}`]);
  }

}
