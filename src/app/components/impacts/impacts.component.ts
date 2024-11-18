import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCalendarDays,
  heroGlobeAlt,
  heroHeart,
  heroHome,
  heroPencil,
  heroUsers,
} from '@ng-icons/heroicons/outline';
interface impact {
  icon: string;
  num: string;
  paragraph: string;
}

@Component({
  selector: 'app-impacts',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './impacts.component.html',
  styleUrl: './impacts.component.css',
  viewProviders: [
    provideIcons({
      heroGlobeAlt,
      heroCalendarDays,
      heroPencil,
      heroUsers,
      heroHome,
      heroHeart,
    }),
  ],
})
export class ImpactsComponent {
  impacts: impact[] = [
    {
      icon: 'heroGlobeAlt',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
    {
      icon: 'heroCalendarDays',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
    {
      icon: 'heroPencil',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
    {
      icon: 'heroUsers',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
    {
      icon: 'heroHome',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
    {
      icon: 'heroHeart',
      num: '2500',
      paragraph: 'food is good for your stomach',
    },
  ];
}
