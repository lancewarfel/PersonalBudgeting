import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app-style-2.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PersonalBudgeting';
  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer ) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIcon('main-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/business-logo.svg'));
  }

}
