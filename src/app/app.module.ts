import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header/header.component";
import {FeaturesComponent} from "./shared/features/features.component";
import {TestimonialCarouselComponent} from "./shared/testimonialcarousel/testimonialcarousel.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";


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
    MatIconModule,
    NgOptimizedImage
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
