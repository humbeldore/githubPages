import { NgModule } from '@angular/core';
import { AppApplyComponent } from './apply.component';
import { AppCoreModule } from '../core.module';
import { AppMailerModule } from '../mailer/mailer.module';

@NgModule({
    imports: [
        AppCoreModule,
        AppMailerModule
    ],
    declarations: [
        AppApplyComponent,
    ],
    exports: [
        AppApplyComponent,
    ]
})

export class AppApplyModule {}
