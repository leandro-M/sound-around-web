import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppMenuComponent } from './_layout/app-menu/app-menu.component';
import { AppPlayerComponent } from './_layout/app-player/app-player.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyCityComponent } from './my-city/my-city.component';
import { MyRegionComponent } from './my-region/my-region.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

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
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
