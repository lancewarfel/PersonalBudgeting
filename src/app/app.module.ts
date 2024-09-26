import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "../shared/header/header.component";
import {FeaturesComponent} from "../shared/features/features.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {AppRoutingModule} from "./app-routing.module";
import {TestimonialCarouselComponent} from "../shared/testimonialcarousel/testimonialcarousel.component";
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {HomePageComponent} from "./home-page/home-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    TestimonialCarouselComponent,
    FooterComponent,
    DashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
