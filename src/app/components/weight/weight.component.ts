import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss']
})

export class AppWeightComponent {

    @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

    onNavigate() {
        window.location.replace('https://kwerbeed.flp.de/');
    }

    toggleVideo() {
        this.videoplayer.nativeElement.play();
      }
}
