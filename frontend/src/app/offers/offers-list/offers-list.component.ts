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

  changeStyle(event: Event) {
    const el = (event.target as HTMLElement).parentElement;
    
    const elsiblings = Array.from(el!.children);

    for (let sibling of elsiblings) {
      sibling.classList.remove('active');
    }
    (event.target as HTMLElement).classList.add('active');
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
    const id = (event.target as HTMLElement).parentElement?.children[0].textContent;

    this.router.navigate([`/data/offers/${id}`]);
  }

  myOffers = false;

  myOffersHandler() {
    
    if (this.authService.user?._id) {
      this.myOffers = true;

      this.offerService.loadUserOffers(this.authService.user?._id).subscribe({
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
