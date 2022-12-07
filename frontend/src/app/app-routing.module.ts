import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainContentComponent } from './core/main-content/main-content.component';
import { FaqComponent } from './core/faq/faq.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContentComponent,
    data: {
      title: 'RBS-Vehicles Express',
      loginRequired: false
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About us',
      loginRequired: false
    }
  },
  {
    path: 'FAQ',
    component: FaqComponent,
    data: {
      title: 'Frequently Asked Questions',
      loginRequired: false
    }
  },
  {
    path: '404-not-found',
    component: NotFoundComponent,
    data: {
      title: 'Oops...!',
      loginRequired: false
    }
  },
  {
    path: '**',
    redirectTo: '/404-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
