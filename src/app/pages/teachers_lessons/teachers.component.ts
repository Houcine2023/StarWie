import { Component, Input } from '@angular/core';
import { DropDownComponent } from '../../components/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

interface lessonsPlans {
  sectionTitle : string
  image: string;
  lessonplan: string;
  title: string;
  categories: { label: string; url: string }[];
  paragraph: string;
  buttTitle: string;
}

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [DropDownComponent, CommonModule, NgIconComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  videos = [
    { id: 'dQw4w9WgXcQ' },
    { id: 'tgbNymZ7vqY' },
    { id: 'kJQP7kiw5Fk' },
  ];

  @Input() videoId!: string;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}`
    );
  }

  lessons: lessonsPlans[] = [
    {
      sectionTitle: 'Coding and Technology',
      image: '/python1.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Introduction to Python Programming',
      categories: [
        { label: 'Computer Science', url: 'Programming/Coding' },
        { label: 'Age Group', url: '14-18' },
      ],
      paragraph:
        'This lesson introduces students to Python basics. They will learn syntax, data types, and how to create simple algorithms to solve everyday problems.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Earth and Space Science',
      image: '/solarsystem.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Modeling the Solar System',
      categories: [
        { label: 'Astronomy', url: 'Space Science' },
        { label: 'Age Group', url: '10-14' },
      ],
      paragraph:
        'Students use scale models to represent the planets and their distances from the sun. This activity reinforces concepts like orbit, scale, and planetary composition.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Astronomy and Space Science',
      image: '/telescope.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Exploring the Night Sky with Telescopes',
      categories: [
        { label: 'Astronomy', url: 'Space Observation' },
        { label: 'Age Group', url: '10-16' },
      ],
      paragraph:
        'Students learn to use telescopes to observe celestial bodies such as planets, stars, and constellations. This activity introduces the basics of star mapping and planetary motion.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Mathematics and Statistics',
      image: '/DataAnal.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Data Collection and Analysis',
      categories: [
        { label: 'Mathematics', url: 'Statistics/Probability' },
        { label: 'Age Group', url: '14-18' },
      ],
      paragraph:
        'Students collect data from their surroundings and analyze it using statistical methods. They learn about averages, medians, standard deviation, and data visualization.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Robotics and Automation',
      image: '/programing.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Programming Autonomous Robots',
      categories: [
        { label: 'Robotics', url: 'Engineering/Robotics' },
        { label: 'Age Group', url: '12-16' },
      ],
      paragraph:
        'Students program simple robots to navigate a maze. They explore sensors, motors, and the logic required for autonomous decision-making.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'AI and Machine Learning',
      image: '/ai.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Building Simple AI Models',
      categories: [
        { label: 'Computer Science', url: 'Artificial Intelligence' },
        { label: 'Age Group', url: '14-18' },
      ],
      paragraph:
        'Students use a teachable machine tool to create simple AI models. They explore concepts like data training, classification, and bias in AI systems.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Robotics and Arduino',
      image: '/linefollower.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Building a Line Following Robot',
      categories: [
        { label: 'Engineering Discipline', url: 'Robotics/Mechanical' },
        { label: 'Age Group', url: '12-17' },
      ],
      paragraph:
        'Students will use Arduino to program a robot that follows a line using infrared sensors. This lesson emphasizes coding, electronics, and mechanical design integration.',
      buttTitle: 'Read More',
    },
    {
      sectionTitle: 'Robotics and Arduino',
      image: '/esp32.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Smart Home Automation with ESP32',
      categories: [
        { label: 'Engineering Discipline', url: 'Electronics/IoT' },
        { label: 'Age Group', url: '14-18' },
      ],
      paragraph:
        'Students create an IoT-based smart home automation system using ESP32 microcontrollers. They will learn about Wi-Fi integration, sensor communication, and programming logic.',
      buttTitle: 'Read More',
    },
    /*
    {
      sectionTitle: 'Chemistry in Action',
      image: '/chimestry.jpg',
      lessonplan: 'Lesson Plan',
      title: 'Exploring Chemical Reactions',
      categories: [
        { label: 'Chemistry', url: 'Science/Chemistry' },
        { label: 'Age Group', url: '13-17' },
      ],
      paragraph:
        'Students mix various household chemicals to observe reactions. They document changes and learn about concepts like exothermic reactions, pH levels, and catalysts.',
      buttTitle: 'Read More',
    },
    */
  ];
  
}
/*


<div class="grid grid-cols-3 gap-12 justify-between px-20">
    <div *ngFor="let lesson of lessons" 
         class="flex flex-col items-start justify-between rounded-xl shadow-xl pb-3 min-h-[400px] gap-3">
      
      <!-- Image Section -->
      <div class="w-full pt-2 bg-primary rounded-t-xl overflow-hidden">
        <img [src]="lesson.image" alt="" 
             class="w-full h-full object-cover rounded-t-xl">
      </div>
      
      <!-- Text Content -->
      <div class="flex flex-col flex-1 gap-5 w-full pl-3" >
        <a href="#" class="text-primary text-2xl">{{lesson.lessonplan}}</a>
        <h1 class="text-4xl font-semibold min-h-[80px]">{{lesson.title}}</h1>
        
        <div class="flex flex-wrap gap-1">
          <div *ngFor="let cat of lesson.categories" class="flex items-center gap-2">
            <p class="text-gray-500 text-xl">{{cat.label}}:</p>
            <a href="#" class="text-lg">{{cat.url}}</a>
          </div>
        </div>
        
        <p class="max-w-lg text-base text-gray-700 flex-1">
          {{lesson.paragraph}}
        </p>
        
        <button class="text-primary text-2xl font-medium self-start mt-auto">
          {{lesson.buttTitle}}
        </button>
      </div>
      
    </div>
    <div class="flex justify-center w-full col-span-3">
      <div class="flex justify-center items-center gap-3 w-full text-xl">
        <button>1</button>
        <div class="bg-primary w-[3px] h-4"></div>
        <button>2</button>
        <div class="bg-primary w-[3px] h-4"></div>
        <button>3</button>
        <button>...</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        
      </div>
     
    </div>

*/