import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CouturecapComponent } from './components/couturecap/couturecap.component';
import { HotellericapComponent } from './components/hotellericap/hotellericap.component';
import { HotelleribepComponent } from './components/hotelleribep/hotelleribep.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursComponent } from './components/hotellericap/cours/cours.component';
import { ChapitreComponent } from './components/hotellericap/chapitre/chapitre.component';
import { ChapitrebepComponent } from './components/hotelleribep/chapitrebep/chapitrebep.component';
import { CoursbepComponent } from './components/hotelleribep/coursbep/coursbep.component';
import { CourscapComponent } from './components/couturecap/courscap/courscap.component';
import { ChapitrecapComponent } from './components/couturecap/chapitrecap/chapitrecap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CouturecapComponent,
    HotellericapComponent,
    HotelleribepComponent,
    FooterComponent,
    CoursComponent,
    ChapitreComponent,
    ChapitrebepComponent,
    CoursbepComponent,
    CourscapComponent,
    ChapitrecapComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
