import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, take } from 'rxjs';
import { BACKEND_ERROR } from 'src/app/shared/error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy{

  backendError$ = this.backendError.asObservable();

  constructor(@Inject(BACKEND_ERROR) private backendError: BehaviorSubject<Error | null>, private router: Router) {
    this.backendError$.pipe(take(1), filter(val => !val)).subscribe(() => {
      
    });
    // this.router.navigate(['/'])
  }
  ngOnDestroy(): void {
    this.backendError.next(null)
  }
  
}
