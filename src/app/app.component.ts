import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeDifferentDay';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('liveQuali',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/steigerungLebensquali.svg'));

    this.matIconRegistry.addSvgIcon('network',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/GrossesNetzwerk.svg'));

    this.matIconRegistry.addSvgIcon('secrectSuccess',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/GeheimesErfolgskonzept.svg'));

    this.matIconRegistry.addSvgIcon('expertsHelp',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/expertenhelfen.svg'));

    this.matIconRegistry.addSvgIcon('praxis',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/AusderPraxisfürdiePraxis.svg'));

    this.matIconRegistry.addSvgIcon('how_to_reg',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/how_to_reg.svg'));
  }
}
