import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './header.component';
import { AppCoreModule } from '../core.module';

@NgModule({
    imports: [
        AppCoreModule
    ],
    declarations: [
        AppHeaderComponent
    ],
    exports: [
        AppHeaderComponent
    ]
})

export class AppHeaderModule {}
