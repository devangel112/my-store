import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  register = {
    name: '',
    lastname: '',
    email: '',
    message: '',
  };

  onRegister() {
    console.log(this.register);
  }
}
