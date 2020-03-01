import { NgModule } from '@angular/core';
import { SuccessComponent } from './success.component';
import { MatIconModule } from '@angular/material/icon';
import { AppCoreModule } from '../core.module';
import { ActionButtonModule } from '../actionButton/action-button.module';

@NgModule({
    imports: [
        AppCoreModule,
        MatIconModule,
        ActionButtonModule
    ],
    declarations: [
        SuccessComponent
    ],
    exports: [
        SuccessComponent
    ]
})

export class SuccessModule {}
