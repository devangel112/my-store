import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angel';
  age = 21;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Angel',
    age: 21,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  decreaseAge() {
    this.person.age--;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
}