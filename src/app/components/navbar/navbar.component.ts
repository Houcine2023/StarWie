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
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  linkSections: LinkSection[] = [
    {
      title: 'Volunteers Section',
      links: [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ],
      image: '/val.jpg',
      paragraph: 'Learn more about our mission and projects.',
    },
    {
      title: 'Teachers',
      links: [
        { label: ' Lesson Plans', url: '/Teacherslessons' },
        { label: 'Resources', url: '/Resources' },
      ],
      image: '/Haroun.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },
    {
      title: 'Students',
      links: [
        { label: ' Games', url: '/games' },
        { label: 'STEM Fields', url: '/stemfields' },
        { label: 'Choosing Your University', url: '/University' },
      ],
      image: '/Student.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },
    {
      title: 'About Us',
      links: [
        { label: 'Choosing Your University', url: '/articles' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Webinars', url: '/webinars' },
      ],
      image: '/Sheinmaze.jpg',
      paragraph: 'Explore a variety of resources and tools.',
    },

    // Add more objects as needed
  ];
  hoveredSection: LinkSection | null = null;
}
/*
  <div class="flex justify-between items-end gap-28 ">
    <div class="w-max h-max">
      <img src="/SiteLogo.svg" alt="" class="" />
    </div>
    
    <input
      placeholder="Find what you are looking for across our website"
      class="w-full border-2 border-black rounded-full py-4 px-8 bg-light-grey "
    />
    <span class="material-symbols-outlined ">
      search
      </span>
  </div>
*/
