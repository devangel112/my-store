import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onRegister() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
