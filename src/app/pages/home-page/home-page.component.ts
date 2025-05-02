import {Component} from '@angular/core';
import {TestimonialCarouselComponent} from "../../shared/components/testimonialcarousel/testimonialcarousel.component";
import {FeaturesComponent} from "../../shared/components/features/features.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports: [ TestimonialCarouselComponent, FeaturesComponent]
})
export class HomePageComponent {

  constructor() {
  }
}
