import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './frontend/profile/profile.component';
import { SiteHeaderComponent } from './_layout/frontend/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/frontend/site-layout/site-layout.component';
import { AppMenuComponent } from './_layout/frontend/app-menu/app-menu.component';
import { AppPlayerComponent } from './_layout/frontend/app-player/app-player.component';
import { AppLayoutComponent } from './_layout/frontend/app-layout/app-layout.component';
import { CategoriesComponent } from './frontend/categories/categories.component';
import { MyCityComponent } from './frontend/city/my-city/my-city.component';
import { MyRegionComponent } from './frontend/region/my-region/my-region.component';
import { CategoryDetailComponent } from './frontend/category-detail/category-detail.component';
import { TrackDetailComponent } from './frontend/track-detail/track-detail.component';
import { ArtistProfileComponent } from './_artist/artist-profile/artist-profile.component';
import { FeedArtistComponent } from './_artist/feed-artist/feed-artist.component';
import { AlbumsArtistComponent } from './_artist/albums-artist/albums-artist.component';
import { RankingArtistComponent } from './_artist/ranking-artist/ranking-artist.component';
import { TopArtistComponent } from './frontend/city/top-artist/top-artist.component';
import { ArtistVisibleComponent } from './frontend/city/artist-visible/artist-visible.component';
import { ArtistNewsComponent } from './frontend/city/artist-news/artist-news.component';
import { CityCategoriesComponent } from './frontend/city/city-categories/city-categories.component';
import { RegionCategoriesComponent } from './frontend/region/region-categories/region-categories.component';
import { RegionArtistNewsComponent } from './frontend/region/region-artist-news/region-artist-news.component';
import { RegionArtistVisibleComponent } from './frontend/region/region-artist-visible/region-artist-visible.component';
import { RegionTopArtistComponent } from './frontend/region/region-top-artist/region-top-artist.component';
import { DbHomeComponent } from './dashboard/db-home/db-home.component';
import { DashboardLayoutComponent } from './_layout/dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderComponent } from './_layout/dashboard/dashboard-header/dashboard-header.component';
import { DashboardMenuComponent } from './_layout/dashboard/dashboard-menu/dashboard-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    AppMenuComponent,
    AppPlayerComponent,
    AppLayoutComponent,
    CategoriesComponent,
    MyCityComponent,
    MyRegionComponent,
    CategoryDetailComponent,
    TrackDetailComponent,
    ArtistProfileComponent,
    FeedArtistComponent,
    AlbumsArtistComponent,
    RankingArtistComponent,
    TopArtistComponent,
    ArtistVisibleComponent,
    ArtistNewsComponent,
    CityCategoriesComponent,
    RegionCategoriesComponent,
    RegionArtistNewsComponent,
    RegionArtistVisibleComponent,
    RegionTopArtistComponent,
    DbHomeComponent,
    DashboardLayoutComponent,
    DashboardHeaderComponent,
    DashboardMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
