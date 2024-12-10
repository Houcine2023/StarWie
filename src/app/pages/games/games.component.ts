import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface categ {
  titele : string,
  description : string,
  icon : string ,
  bgColor : string
}
export interface LessonCard {
  title: string; 
  image: string; 
  description: string; 
  categories: { label: string; url: string }[];
  buttonText: string; 
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  categories = [
    {
      title: 'Science',
      description: 'Explore the wonders of the natural world through interactive experiments.',
      icon: 'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
      bgColor: 'bg-sky-500',
    },
    {
      title: 'Mathematics',
      description: 'Master math skills with fun and challenging games.',
      icon: 'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z',
      bgColor: 'bg-yellow-500',
    },
    {
      title: 'Engineering',
      description: 'Solve real-world engineering problems through virtual challenges.',
      icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z',
      bgColor: 'bg-red-500',
    },
    {
      title: 'Technology',
      description: 'Learn coding and build virtual creations.',
      icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z',
      bgColor: 'bg-blue-500',
    },
  ];

  cards: LessonCard[] = [
    {
      title: 'Python Coding Game',
      image: '/python1.jpg',
      description:
        'Solve puzzles by writing Python code to unlock levels and explore concepts like loops and conditionals.',
      categories: [
        { label: 'Computer Science', url: 'Programming/Coding' },
        { label: 'Age Group', url: '14-18' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Solar System Explorer',
      image: '/solarsystem.jpg',
      description:
        'Guide your spacecraft through the solar system, learning about planets and their orbits.',
      categories: [
        { label: 'Astronomy', url: 'Space Science' },
        { label: 'Age Group', url: '10-14' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Star Gazing Challenge',
      image: '/telescope.jpg',
      description:
        'Use a virtual telescope to identify constellations and celestial bodies in the night sky.',
      categories: [
        { label: 'Astronomy', url: 'Space Observation' },
        { label: 'Age Group', url: '10-16' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Data Detective',
      image: '/DataAnal.jpg',
      description:
        'Collect and analyze data from simulated scenarios to uncover hidden patterns.',
      categories: [
        { label: 'Mathematics', url: 'Statistics/Probability' },
        { label: 'Age Group', url: '14-18' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Robot Maze Challenge',
      image: '/programing.jpg',
      description:
        'Program a robot to navigate mazes using logic and sensor data.',
      categories: [
        { label: 'Robotics', url: 'Engineering/Robotics' },
        { label: 'Age Group', url: '12-16' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'AI Model Builder',
      image: '/ai.jpg',
      description:
        'Train an AI model to recognize objects and classify images in this interactive game.',
      categories: [
        { label: 'Computer Science', url: 'Artificial Intelligence' },
        { label: 'Age Group', url: '14-18' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Line Follower Robotics',
      image: '/linefollower.jpg',
      description:
        'Design and control a robot to follow a track using sensors and programming.',
      categories: [
        { label: 'Engineering Discipline', url: 'Robotics/Mechanical' },
        { label: 'Age Group', url: '12-17' },
      ],
      buttonText: 'Play Now',
    },
    {
      title: 'Smart Home Game',
      image: '/esp32.jpg',
      description:
        'Simulate building a smart home with IoT devices and automation logic.',
      categories: [
        { label: 'Engineering Discipline', url: 'Electronics/IoT' },
        { label: 'Age Group', url: '14-18' },
      ],
      buttonText: 'Play Now',
    },
  ];
  

}
/*
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>


*/ 

/*

  STEM stands for Science, Technology, Engineering, and Mathematics—a collection of disciplines that drive innovation, critical thinking, and problem-solving. These fields form the backbone of modern society, influencing advancements in healthcare, communication, transportation, and countless other industries.

By studying STEM, individuals gain the tools to explore the mysteries of the universe, develop life-saving technologies, engineer sustainable solutions, and decode the mathematical patterns that shape our world. Whether it’s discovering new medicines, building bridges, creating AI systems, or solving equations, STEM is about curiosity, creativity, and making an impact.

STEM careers are among the fastest-growing and highest-paying fields globally, offering opportunities to contribute meaningfully to the challenges and opportunities of the 21st century.

*/