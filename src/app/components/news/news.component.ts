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
      image: 'enicarobots.jpg',
      title: 'Join the EnicarRobots8.0 Junior Challenge!',
      paragraph:
        'Get ready to unleash your creativity and showcase your robotics talents! Join us for EnicarROBOTS 8.0, the ultimate robotics challenge in its eighth exciting edition!',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
    {
      image: 'CyberSecuity.jpg',
      title: 'Join our CyberSecurity Workshop ',
      paragraph:
        'Join our CyberSecurity Workshop and unlock the skills to protect and secure the digital world!',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
    {
      image: 'SheInMaze2.0.jpg',
      title: 'Join us for EnicarEn Rose 2.0',
      paragraph:
        'Join us for EnicarEn Rose 2.0 and support the fight against breast cancer. Together, we can make a difference!',
      link: 'www.facebook.com',
      tags: ['News', 'Spotlights'],
    },
  ];
}
