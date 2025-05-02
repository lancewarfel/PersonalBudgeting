import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {TestimonialCarouselComponent} from "./shared/components/testimonialcarousel/testimonialcarousel.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FooterComponent} from "./shared/components/footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./shared/components/header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    TestimonialCarouselComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    MatIconModule,
    NgOptimizedImage,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
