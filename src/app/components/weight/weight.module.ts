import { NgModule } from '@angular/core';
import { AppWeightComponent } from './weight.component';
import { CommonModule } from '@angular/common';
import { SliderCarouselModule } from 'slider-carousel';

@NgModule({
    imports: [
        CommonModule,
        SliderCarouselModule
    ],
    declarations: [
        AppWeightComponent
    ],
    exports: [
        AppWeightComponent
    ]
})

export class AppWeightModule { }
