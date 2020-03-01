import { NgModule } from '@angular/core';
import { AppCoreModule } from '../core.module';
import { AppMailerComponent } from './mailer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SuccessComponent } from '../success/success.component';

@NgModule({
    imports: [
        AppCoreModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
    ],
    declarations: [
        AppMailerComponent,
    ],
    exports: [
        AppMailerComponent
    ]
})

export class AppMailerModule { }
