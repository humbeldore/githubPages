import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShopComponent } from './shop.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SliderCarouselModule } from 'slider-carousel';
import { CommonModule } from '@angular/common';
import { AppWeightComponent } from '../weight/weight.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        MatIconModule,
        SliderCarouselModule,
        CommonModule
    ],
    declarations: [
        AppShopComponent,
        HeaderComponent,
        AppWeightComponent
    ],
    exports: [
        AppShopComponent
    ],
    bootstrap: [
    ],
    providers: [
    ]
})

export class AppShopModule { }
