import { NgModule } from '@angular/core';
import { AppWeightComponent } from './weight.component';
import { MatVideoModule } from 'mat-video';

@NgModule({
    imports: [
        MatVideoModule
    ],
    declarations: [
        AppWeightComponent
    ],
    exports: [
        AppWeightComponent
    ]
})

export class AppWeightModule { }
