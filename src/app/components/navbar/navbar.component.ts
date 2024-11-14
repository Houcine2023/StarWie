import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

interface LinkSection {
  title: string;
  links: { label: string; url: string }[];
  image: string;
  paragraph: string;
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  linkSections: LinkSection[] = [
    {
      title: 'Parents',
      links: [
        { label: 'Mission', url: '/mission' },
        { label: 'Projects', url: '/projects' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
      ],
      image: '/logo-ieee-try.webp',
      paragraph: 'Learn more about our mission and projects.',
    },
    {
      title: 'Teachers',
      links: [
        { label: 'Articles', url: '/articles' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
      ],
      image: '/path/to/explore-resources-image.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },
    {
      title: 'Students',
      links: [
        { label: 'Articles', url: '/articles' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
      ],
      image: '/path/to/explore-resources-image.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },
    {
      title: 'About Us',
      links: [
        { label: 'Articles', url: '/articles' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
      ],
      image: '/path/to/explore-resources-image.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },
  
    // Add more objects as needed
  ];
  hoveredSection: LinkSection | null = null;

}
