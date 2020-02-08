import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShopComponent } from './shop.component';
import { MatVideoModule } from 'mat-video';

@NgModule({
    imports: [
        RouterModule,
        MatVideoModule
    ],
    declarations: [
        AppShopComponent,
    ],
    exports: [
        AppShopComponent
    ],
    bootstrap: [
    ]
})

export class AppShopModule { }
