import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  @ViewChild(
    NgForm,
    { static: true }
  ) createOffer!: ElementRef<HTMLFormElement>;



  constructor() {
  }

  ngOnInit(): void {
  }

  createOfferHandler(createOfferForm: NgForm): void {
    if (createOfferForm.invalid) {
      return;
    }
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
