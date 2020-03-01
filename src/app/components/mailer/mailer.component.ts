import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-mailer',
    templateUrl: './mailer.component.html',
    styleUrls: ['./mailer.component.scss'],
})
export class AppMailerComponent implements OnInit {

    formGroup: FormGroup;
    private url = '';

    constructor(private http: HttpClient) {
        this.formGroup = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', Validators.required)
        });
    }

    ngOnInit() { }

    processForm() {
        if (this.formGroup.invalid) {
            return;
        }
        const data = this.formGroup.value;
        this.http.post(`${this.url}`, { data })
            .toPromise()
            .then()
            .catch();
    }

}
