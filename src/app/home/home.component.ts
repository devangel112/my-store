import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angel';
  age = 21;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  imgWidth = 10;
  names: string[] = ['Angel', 'Eduardo', 'Ramón'];
  newName = '';
  person = {
    name: 'Angel',
    age: 21,
    avatar: 'https://source.unsplash.com/random',
  };
  items: Item[] = [
    {
      name: 'Photo 1',
      price: 200,
      image: './assets/img-1.jpg',
      category: 'All',
    },
    {
      name: 'Photo 2',
      price: 213,
      image: './assets/img-2.jpg',
      category: '',
    },
    {
      name: 'Photo 3',
      price: 245,
      image: './assets/img-1.jpg',
    },
    {
      name: 'Photo 4',
      price: 834,
      image: './assets/img-2.jpg',
    },
  ];
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

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
    this.person.name = element.value;
  }

  addName() {
    if (this.newName !== '') {
      this.names = [...this.names, this.newName];
      this.newName = '';
    }
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  downloadPhoto(index: number) {
    const element = document.getElementById('Photo-' + (index + 1));
    const url: any = element?.getAttribute('src');
    if (url !== null || url !== '') {
      const a = document.createElement('a');
      a.href = url;
      a.download = url.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
}
