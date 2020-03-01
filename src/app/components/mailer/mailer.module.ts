import { NgModule } from '@angular/core';
import { AppCoreModule } from '../core.module';
import { AppMailerComponent } from './mailer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        AppCoreModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        AppMailerComponent
    ],
    exports: [
        AppMailerComponent
    ]
})

export class AppMailerModule { }
