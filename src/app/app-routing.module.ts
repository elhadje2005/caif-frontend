import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CouturecapComponent } from './components/couturecap/couturecap.component';
import { HotellericapComponent } from './components/hotellericap/hotellericap.component';
import { HotelleribepComponent } from './components/hotelleribep/hotelleribep.component';
import { CoursComponent } from './components/hotellericap/cours/cours.component';
import { ChapitreComponent } from './components/hotellericap/chapitre/chapitre.component';
import { CoursbepComponent } from './components/hotelleribep/coursbep/coursbep.component';
import { ChapitrebepComponent } from './components/hotelleribep/chapitrebep/chapitrebep.component';
import { CourscapComponent } from './components/couturecap/courscap/courscap.component';
import { ChapitrecapComponent } from './components/couturecap/chapitrecap/chapitrecap.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "cours", component: CoursComponent },
  { path: "chapitre", component: ChapitreComponent },
  { path: "coursbep", component: CoursbepComponent },
  { path: "chapitrebep", component: ChapitrebepComponent },
  { path: "courscap", component: CourscapComponent },
  { path: "chapitrecap", component: ChapitrecapComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "couturecap", component: CouturecapComponent },
  { path: "hotellericap", component: HotellericapComponent },
  { path: "hotelleribep", component: HotelleribepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
