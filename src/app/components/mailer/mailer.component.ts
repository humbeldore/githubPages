import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-mailer',
    templateUrl: './mailer.component.html',
    styleUrls: ['./mailer.component.scss'],
})
export class AppMailerComponent implements OnInit {

    options = ['08.03.2020'];

    formGroup: FormGroup;
    private url = '/api';

    constructor(private http: HttpClient, private router: Router) {
        this.formGroup = new FormGroup({
            day: new FormControl('08.03.2020', Validators.required),
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
            .then(() => {
                this.formGroup.reset();
                this.router.navigate(['/erfolgreich']);
            })
            .catch();
    }

}
