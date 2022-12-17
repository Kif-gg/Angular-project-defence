import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authorization/auth.service';
import { ReqRepService } from '../services/request-repair/req-rep.service';

@Component({
  selector: 'app-request-repair',
  templateUrl: './request-repair.component.html',
  styleUrls: ['./request-repair.component.css']
})
export class RequestRepairComponent implements OnInit {

  @ViewChild(
    NgForm,
    { static: true }
  ) requestRepair!: ElementRef<HTMLFormElement>;

  constructor(private reqrepService: ReqRepService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  id = this.authService.user?._id;

  createRequestHandler(createReqForm: NgForm): void {
    if (confirm('Do you want to proceed with the current data for your offer?')) {

      if (createReqForm.invalid) {
        return;
      }
      const { imageUrl, problem, brandmodel, phoneNumber } = createReqForm.value;

      this.reqrepService.createRequest(imageUrl, problem, brandmodel, phoneNumber, this.id!)
      .subscribe(() => {
        
      })
      this.router.navigate(['/']);
    } else {
      return;
    }
  }

}
