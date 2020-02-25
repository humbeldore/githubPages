import { Component } from '@angular/core';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss'],
})

export class AppWeightComponent {
    public currentNumber = 1;
    public example: any = null;
    public images: string[] = [
        'assets/img/at_01.jpg',
        'assets/img/at_02.jpg',
        'assets/img/at_03.jpg',
        'assets/img/at_04.jpg',
        'assets/img/rm_01.jpg',
        'assets/img/rm_02.jpg',
        'assets/img/rm_03.jpg',
        'assets/img/rm_04.jpg',
    ]

    constructor() {
        this.selectExample(1);
    }

    selectExample(number: number) {
        this.currentNumber = number;
    }

    onNavigate() {
        window.location.replace('https://kwerbeed.flp.de/');
    }
}
