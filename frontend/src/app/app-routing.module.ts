import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainContentComponent } from './core/main-content/main-content.component';
import { FaqComponent } from './core/faq/faq.component';
import { AboutComponent } from './core/about/about.component';
import { ErrorComponent } from './core/error/error.component';
import { RequestRepairComponent } from './request-repair/request-repair.component';
import { AuthGuard } from './shared/guards/auth-guard';

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
    path: 'data',
    component: RequestRepairComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Request our services',
      loginRequired: true
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
    data: {
      title: 'An error occurred...!'
    }
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
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
