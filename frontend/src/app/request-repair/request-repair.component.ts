import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-repair',
  templateUrl: './request-repair.component.html',
  styleUrls: ['./request-repair.component.css']
})
export class RequestRepairComponent implements OnInit {

  @ViewChild(
    NgForm,
    { static: true }
  ) createOffer!: ElementRef<HTMLFormElement>;

  constructor() { }

  ngOnInit(): void {
  }

  createRequestHandler(createRequestForm: NgForm): void {
    if (createRequestForm.invalid) {
      return;
    }
  }

}
