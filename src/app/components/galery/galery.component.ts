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
      buttTitle : "Buttone1",
    },
    {
      title : 'firstimage',
      images : '/first_galery.jpg',
      paragraph : "paragraph number 3",
      buttTitle : "Buttone1",
    },
  ]

  ngOnInit() {
    this.timer = setInterval(()=>{
      this.nextSlide();
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
    this.currentIndex = (this.currentIndex -1) %(this.imageslist.length);
  }


}