import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// LAYOUTS
import { SiteLayoutComponent } from './_layout/frontend/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/frontend/app-layout/app-layout.component';
import { DashboardLayoutComponent } from './_layout/dashboard/dashboard-layout/dashboard-layout.component';

// COMPONENTS

// Dashboard
import { DbHomeComponent } from './dashboard/db-home/db-home.component';

// Home
import { HomeComponent } from './frontend/home/home.component';

// Perfil
import { ProfileComponent } from './frontend/profile/profile.component';

// Música, Categorias e perfil do artista
import { CategoriesComponent } from './frontend/categories/categories.component';
import { CategoryDetailComponent } from './frontend/category-detail/category-detail.component';
import { TrackDetailComponent } from './frontend/track-detail/track-detail.component';
import { ArtistProfileComponent } from './_artist/artist-profile/artist-profile.component';
import { FeedArtistComponent } from './_artist/feed-artist/feed-artist.component';
import { AlbumsArtistComponent } from './_artist/albums-artist/albums-artist.component';
import { RankingArtistComponent } from './_artist/ranking-artist/ranking-artist.component';

// Minha cidade
import { MyCityComponent } from './frontend/city/my-city/my-city.component';
import { TopArtistComponent } from './frontend/city/top-artist/top-artist.component';


import { MyRegionComponent } from './frontend/region/my-region/my-region.component';

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
  {
    path: 'profile',
    component: AppLayoutComponent,
    children: [
      { path: '' , component: ProfileComponent }
    ]
  },
  {
    path: 'categories',
    component: AppLayoutComponent,
    children: [
      { path: '' , component: CategoriesComponent },
      { path: 'category-detail' , component: CategoryDetailComponent }
    ]
  },
  {
    path: 'track-detail',
    component: AppLayoutComponent,
    children: [
      { path: '' , component: TrackDetailComponent }
    ]
  },
  {
    path: 'artist-profile',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'feed-artist', pathMatch: 'full' },
      { path: 'feed-artist', component: FeedArtistComponent },
      { path: 'albums-artist', component: AlbumsArtistComponent },
      { path: 'ranking-artist', component: RankingArtistComponent }
    ]
  },
  {
    path: 'my-city',
    component: AppLayoutComponent,
    children: [
      { path: '' , component: MyCityComponent }
    ]
  },
  {
    path: 'my-region',
    component: AppLayoutComponent,
    children: [
      { path: '' , component: MyRegionComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '' , component: DbHomeComponent }
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
