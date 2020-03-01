import { NgModule } from '@angular/core';
import { AppCarouselComponent } from './carousel.component';
import { SliderCarouselModule } from 'slider-carousel';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SliderCarouselModule,
    ],
    declarations: [
        AppCarouselComponent
    ],
    exports: [
        AppCarouselComponent
    ]
})

export class AppCarouselModule {}
