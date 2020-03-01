import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})

export class AppCarouselComponent {
    public currentNumber = 1;
    public example: any = null;
    public images: string[] = [];

    constructor() {
        for (let i = 1; i <= 20; i++) {
            this.images.push(`./assets/img/${i}.jpg`);
        }
        this.selectExample(1);
    }

    selectExample(currentNumber: number) {
        this.currentNumber = currentNumber;
    }

    onNavigate() {
        // window.location.replace('https://kwerbeed.flp.de/');
    }
}
