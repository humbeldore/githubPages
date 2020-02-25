import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShopComponent } from './shop.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        MatIconModule
    ],
    declarations: [
        AppShopComponent,
        HeaderComponent,
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
