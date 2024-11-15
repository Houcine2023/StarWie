import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';


interface Galeryimages {
  title : string;
  images : string;
  paragraph : string;
  buttTitle : string;
}


@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})


export class GaleryComponent {

  timer : any;
  currentIndex : number = 0;
  isActive : boolean = false;

  imageslist : Galeryimages[]=[
    {
      title : 'firstimage',
      images : '/first_galery.jpg',
      paragraph : "paragraph number 1",
      buttTitle : "Buttone1",
    },
    {
      title : 'secondimage',
      images : '/seconde_galery.jpg',
      paragraph : "paragraph number 2",
      buttTitle : "Buttone2",
    },
    {
      title : 'firstimage',
      images : '/third_galery.jpg',
      paragraph : "paragraph number 3",
      buttTitle : "Buttone3",
    },
  ]

  ngOnInit() {
    this.timer = setInterval(()=>{
      this.nextSlide();
      this.isActive = !this.isActive;
    }, 5000)
  }
  ngOnDestroy() {
    if(this.timer) {
      clearInterval(this.timer);
    }

  }


  nextSlide(){
    this.currentIndex = (this.currentIndex +1) % (this.imageslist.length);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.imageslist.length) % this.imageslist.length;
  }


}
/*
*ngFor="let image of imageslist; let i = index"
[ngClass]="{
  'opacity-100 translate-x-0': currentIndex === i,
  'opacity-0 -translate-x-full': currentIndex > i,
  'opacity-0 translate-x-full': currentIndex < i
}"
*/