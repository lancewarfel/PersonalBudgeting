import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app-style-2.component.css'
})
export class AppComponent implements OnInit {
  title = 'PersonalBudgeting';

  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      'main-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/business-logo.svg')
    );
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']); // Route to the dashboard page
  }
}
