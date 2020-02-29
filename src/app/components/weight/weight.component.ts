import { Component } from '@angular/core';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss'],
})

export class AppWeightComponent {
    public currentNumber = 1;
    public example: any = null;
    public images: string[] = [];

    constructor() {
        for (let i = 1; i <= 20; i++) {
            this.images.push(`./assets/img/${i}.jpg`);
        }
        this.selectExample(1);
    }

    selectExample(number: number) {
        this.currentNumber = number;
    }

    onNavigate() {
        // window.location.replace('https://kwerbeed.flp.de/');
    }
}
