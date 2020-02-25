import { NgModule } from '@angular/core';
import { AppWeightComponent } from './weight.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule
    ],
    declarations: [
        AppWeightComponent
    ],
    exports: [
        AppWeightComponent
    ]
})

export class AppWeightModule { }
