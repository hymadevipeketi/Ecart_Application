import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [

    'https://www.pngfind.com/pngs/m/149-1497379_amazon-india-shopping-offers-graphic-design-hd-png.png',
    'https://www.freepnglogos.com/uploads/furniture-png/solid-oak-and-reclaimed-furniture-chichester-rustington-6.png',
    'https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg',
    'https://www.pngall.com/wp-content/uploads/1/Electronic.png'
   
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 8000);
  }
}
