import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {

  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer ) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIcon('main-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/business-logo.svg'+ new Date().getTime()));
  }
}
