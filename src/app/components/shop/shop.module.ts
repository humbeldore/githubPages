import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShopComponent } from './shop.component';

@NgModule({
    imports: [
        RouterModule,
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
