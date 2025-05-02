import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,

  ]
})
export class HeaderComponent {

  constructor(public readonly router: Router) {}

  public routeToHome() {
    this.router.navigate(['']);
  }
}
