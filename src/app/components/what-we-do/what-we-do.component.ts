import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';


interface categorie {
  img : string;
  paragraph : string;
  buttTitle : string;
  title : string
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
      img : "/maknesi.jpg",
      paragraph : "Over 130 lesson plans you can use to teach school-aged children engineering concepts.",
      buttTitle : "Search Now",
      title : 'lessons Plans'
    },
    {
      img : "/univ.jpg",
      paragraph : "Guiding students in choosing their university through virtual sessions with advisors, students, and alumni to explore programs and opportunities.",
      buttTitle : "Join Now",
      title : 'University'
    },
    {
      img : "newsletter.jpg",
      paragraph : "Stay up to date with new TryEngineering resources, products, and events, as well as program and volunteer spotlights.",
      buttTitle : "Subscribe Now",
      title : 'News'
    },
    {
      img : "/field.jpg",
      paragraph : "Inspiring students to explore STEM fields through engaging resources, activities, and insights from experts to spark curiosity and passion.",
      buttTitle : "Learn More",
      title : 'Stem Fields'
    },
    {
      img : "/hadhjali.jpg",
      paragraph : "Discover fun and educational games designed to challenge and excite students while enhancing their learning experience.",
      buttTitle : "Join Now",
      title : 'Games'
    },
    {
      img : "/ie.jpg",
      paragraph : "Explore training courses designed to empower volunteers with the skills and knowledge to make a meaningful impact in their communities.",
      buttTitle : "Training Courses",
      title : 'volunteers'
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "Explore More",
      title : 'Resources'
    },
    {
      img : "/StemSummit.jpg",
      paragraph : "Annual virtual event, where the TryEngineering community comes together to share and inspire with STEM opportunities, resources, and activities.",
      buttTitle : "Explore Now",
      title : ''
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

