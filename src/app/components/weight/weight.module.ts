import { NgModule } from '@angular/core';
import { AppWeightComponent } from './weight.component';
import { CommonModule } from '@angular/common';
import { SliderCarouselModule } from 'slider-carousel';
import { MailerComponent } from '../mailer/mailer.component';

@NgModule({
    imports: [
        CommonModule,
        SliderCarouselModule,
    ],
    declarations: [
        AppWeightComponent,
        MailerComponent
    ],
    exports: [
        AppWeightComponent
    ],
    providers: [
    ]
})

export class AppWeightModule { }
