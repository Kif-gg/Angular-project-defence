import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    AboutComponent
  ]
})
export class CoreModule { }
