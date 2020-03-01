import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrls: ['./apply.component.scss']
})

export class AppApplyComponent {
    public constructor(private titleService: Title ) { }

    public setTitle(newTitle: string = 'Jetzt Bewerben') {
      this.titleService.setTitle( newTitle );
    }
}
