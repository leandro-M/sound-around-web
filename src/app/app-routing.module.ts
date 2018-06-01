import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// LAYOUTS
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

// COMPONENTS
// Home
import { HomeComponent } from './home/home.component';

// Perfil
import { ProfileComponent } from './profile/profile.component';

// Categorias
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


import { MyCityComponent } from './my-city/my-city.component';
import { MyRegionComponent } from './my-region/my-region.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent}
    ],
    data: {
      showPlayer: true
    }
  },
  { path: 'profile',
    component: AppLayoutComponent,
    children: [
      {path: '' , component: ProfileComponent}
    ]
  },
  { path: 'categories',
    component: AppLayoutComponent,
    children: [
      {path: '' , component: CategoriesComponent}
    ]
  },
  { path: 'category-detail',
    component: AppLayoutComponent,
    children: [
      {path: '' , component: CategoryDetailComponent}
    ]
  },
  { path: 'my-city',
    component: AppLayoutComponent,
    children: [
      {path: '' , component: MyCityComponent}
    ]
  },
  { path: 'my-region',
    component: AppLayoutComponent,
    children: [
      {path: '' , component: MyRegionComponent}
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
