import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.scss'],
})
export class MailerComponent implements OnInit, OnDestroy {

  public subscribeForm: FormGroup;
  public email: FormControl;
  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() {
      this.createFormControls();
      this.createForm();
  }

  createFormControls() {
      this.email = new FormControl('', [
          Validators.required
      ]);
  }

  createForm() {
      this.subscribeForm = new FormGroup({
          email: this.email
      });
  }

  sendMail(email) {
    // https://script.google.com/macros/s/AKfycbwmIasPDvMPDQG41X6NLz5ZCraQ7taPk6zSO787Eg/exec
  }

  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

}
