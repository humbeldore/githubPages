import { NgModule } from '@angular/core';
import { AppDatenschutzComponent } from './datenschutz.component';
import { AppCoreModule } from '../core.module';

@NgModule({
    imports: [
        AppCoreModule
    ],
    declarations: [
        AppDatenschutzComponent
    ],
    exports: [
        AppDatenschutzComponent
    ]
})

export class AppDatenschutzModule {}
