import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface News {
  image: string;
  title: string;
  paragraph: string;
  link: string;
  tags: string[];
}
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {

  news: News[] = [
    {
      image: 'StemSummit.jpg',
      title: 'Join the RenderMan Art Challenge!',
      paragraph:
        'Are you ready to unleash your creativity and showcase your artistic talents? Participate in the RenderMan “SciTech” Art Challenge! In their eleventh annual art challenge',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
    {
      image: 'StemSummit.jpg',
      title: 'Join the RenderMan Art Challenge!',
      paragraph:
        'Are you ready to unleash your creativity and showcase your artistic talents? Participate in the RenderMan “SciTech” Art Challenge! In their eleventh annual art challenge',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
    {
      image: 'StemSummit.jpg',
      title: 'Join the RenderMan Art Challenge!',
      paragraph:
        'Are you ready to unleash your creativity and showcase your artistic talents? Participate in the RenderMan “SciTech” Art Challenge! In their eleventh annual art challenge',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
  ];
}
