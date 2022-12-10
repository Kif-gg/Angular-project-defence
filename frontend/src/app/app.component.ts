import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RBS-Vehicle-Express';
  admin = false;


  constructor(private router: Router, private pageTitle: Title) {
    this.router.events.pipe(
      filter((evt): evt is ActivationStart => evt instanceof ActivationStart),
      map(evt => evt.snapshot.data?.['title']),
      filter((data) => !!data)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });

    this.router.events.pipe(
      filter((evt): evt is ActivationStart => evt instanceof ActivationStart),
      map(evt => evt.snapshot.data?.['admin']),
      filter((data) => !!data)
    ).subscribe((admin) => {
      if (!admin) {
        this.admin = false;
      } else if (admin == true) {
      this.admin = admin;
      }
    })
  }
}
