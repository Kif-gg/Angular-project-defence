import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainContentComponent } from './core/main-content/main-content.component';
import { FaqComponent } from './core/faq/faq.component';
import { AboutComponent } from './core/about/about.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContentComponent,
    data: {
      title: 'RBS-Vehicles Express',
      
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About us',
      
    }
  },
  {
    path: 'FAQ',
    component: FaqComponent,
    data: {
      title: 'Frequently Asked Questions',
      
    }
  },
  {
    path: '404-not-found',
    component: NotFoundComponent,
    data: {
      title: 'Oops...!',
      
    }
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'o074dm1n/h1dd3n4ddr35s',
    loadChildren: () => import('./auth-admin/auth-admin.module').then(m => m.AuthAdminModule)
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
