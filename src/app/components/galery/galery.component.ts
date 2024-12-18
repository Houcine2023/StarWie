import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Galeryimages {
  title: string;
  images: string;
  paragraph: string;
  buttTitle: string;
}

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css',
})
export class GaleryComponent {
  timer: any;
  currentIndex: number = 0;
  isActive: boolean = false;
  transitionState: 'enter' | 'leave' | 'active' = 'active';

  imageslist: Galeryimages[] = [
    {
      title: 'firstimage',
      images: '/sanheja.jpg',
      paragraph: 'Explore Our Lessons Plan',
      buttTitle: 'Search Lessons',
    },
     {
      title: 'secondimage',
      images: '/maknesi2.JPG',
      paragraph: ' Welcome To Our New Website',
      buttTitle: 'Scroll Down',
    },
    {
      title: 'thirdimage',
      images: '/Sheinmaze.jpg',
      paragraph: 'Inspiring The Engineers Of Tomorrow',
      buttTitle: 'Explore Our Site',
    },
  ];

  ngOnInit() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nextSlide() {
    this.transitionState = 'leave';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageslist.length;
      this.transitionState = 'enter';
    }, 500); // Matches the transition duration
  }

  prevSlide() {
    this.transitionState = 'leave';
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.imageslist.length) %
        this.imageslist.length;
      this.transitionState = 'enter';
    }, 500);
  }
}
