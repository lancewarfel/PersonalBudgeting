import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  standalone: true,
  imports: []
})
export class FeaturesComponent {

  constructor(public readonly router: Router) {
  }

  public navigate( route: string) {
    this.router.navigate([`/${ route }`]);
  }
}
