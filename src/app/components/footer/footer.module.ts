import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { AppCoreModule } from '../core.module';
import { AppDatenschutzModule } from '../datenschutz/datenschutz.module';
import { AppImpressumModule } from '../impressum/impressum.module';

@NgModule({
    imports: [
        AppCoreModule,

        AppDatenschutzModule,
        AppImpressumModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})

export class AppFooterModule { }
