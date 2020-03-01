import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLandingPageComponent } from './landing-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActionButtonModule } from '../actionButton/action-button.module';
import { AppCarouselModule } from '../carousel/carousel.module';
import { AppHeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        MatIconModule,

        AppHeaderModule,
        ActionButtonModule,
        AppCarouselModule
    ],
    declarations: [
        AppLandingPageComponent,
    ],
    exports: [
        AppLandingPageComponent
    ]
})

export class AppLandingPageModule { }
