import { NgModule } from '@angular/core';
import { ActionButtonComponent } from './action-button.component';
import { AppCoreModule } from '../core.module';

@NgModule({
    imports: [
        AppCoreModule
    ],
    declarations: [
        ActionButtonComponent
    ],
    exports: [
        ActionButtonComponent
    ]
})

export class ActionButtonModule {}
