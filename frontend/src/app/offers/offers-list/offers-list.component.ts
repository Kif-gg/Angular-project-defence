import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IOffer } from '../../shared/interfaces/offer';
import { OfferService } from '../../services/offers/offer.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offersList: IOffer[] | null = null;

  constructor(private offerService: OfferService, private router: Router, private authService: AuthService) { }

  @ViewChild(
    NgForm,
    { static: true }
  ) searchForm!: ElementRef<HTMLFormElement>;

  ngOnInit(): void {
    this.allOffersHandler();
  }

  searchOffers(searchForm: NgForm) {

    const { brand, model, fromPrice, toPrice, fromYear, toYear, keyword } = searchForm.value;
    this.offerService.loadOffersByParams(brand, model, fromPrice, toPrice, fromYear, toYear, keyword).subscribe({
      next: (value) => {
        this.offersList = value;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  allOffersHandler() {
    this.myOffers = false;
    this.offerService.loadOffers().subscribe({
      next: (value) => {
        this.offersList = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  selectedBrandValue = '';

  onSelectedBrandHandler(value: string): void {
    if (value == 'all') {
      this.selectedBrandValue = '';
    } else {
      this.selectedBrandValue = value;
    }
  }

  selectedModelValue = '';

  onSelectedModelHandler(value: string): void {
    if (value == 'all') {
      this.selectedModelValue = '';
    } else {
      this.selectedModelValue = value;
    }
  }

  detailsHandler(event: Event): void {
    const id = (event.target as HTMLElement).parentElement?.parentElement?.children[0].textContent;

    this.router.navigate([`/data/offers/${id}`]);
  }

  userId = this.authService.user?._id;

  myOffers = false;

  myOffersHandler() {
    if (this.userId) {
      this.myOffers = true;

      this.offerService.loadUserOffers(this.userId).subscribe({
        next: (value) => {
          this.offersList = value;
          
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.router.navigate(['/users/login']);
    }
  }

}
