import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss']
})

export class ActionButtonComponent {

    @Input() link = '/bewerben';
    @Input() externlink = '';
    @Input() title = 'jetzt bewerben';
    @Input() disableSubTitle = false;

    constructor(private router: Router) {}

    navigate() {
        if (this.externlink.length > 0) {
            window.location.assign(this.externlink);
            return;
        }
        this.router.navigate([this.link]);
    }
}
