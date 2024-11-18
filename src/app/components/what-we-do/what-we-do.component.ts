import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';


interface categorie {
  img : string;
  paragraph : string;
  buttTitle : string;
}

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css',
  viewProviders: [provideIcons({  heroChevronRight })]

})
export class WhatWeDoComponent {
  Sections : categorie[] = [
    {
      img : "/lessons.jpg",
      paragraph : "Over 130 lesson plans you can use to teach school-aged children engineering concepts.",
      buttTitle : "Search Now"
    },
    {
      img : "/classroom.jpg",
      paragraph : "Connecting engineers and technical professionals with teachers of school-aged children for a virtual visit to their classroom.",
      buttTitle : "button2"
    },
    {
      img : "newsletter.jpg",
      paragraph : "Stay up to date with new TryEngineering resources, products, and events, as well as program and volunteer spotlights.",
      buttTitle : "button3"
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "button4"
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "button4"
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "button4"
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "button4"
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "button4"
    },
    
  ]

  getSectionGroups(): categorie[][] {
    const chunkSize = 4;
    const groups = [];
    for (let i = 0; i < this.Sections.length; i += chunkSize) {
      groups.push(this.Sections.slice(i, i + chunkSize));
    }
    return groups;
  }
}

