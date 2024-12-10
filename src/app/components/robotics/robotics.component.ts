import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-robotics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './robotics.component.html',
  styleUrl: './robotics.component.css'
})
export class RoboticsComponent {
  blocks = [
    {
      id: 1,
      title: 'Materials',
      isOpen: false,
      content: 'Use the programmed Arduino board and LED bulbs for testing.',
    },
    {
      id: 2,
      title: 'Process',
      isOpen: false,
      steps: [
        {
          title: 'Step 1: Get an Arduino Board and USB Cable',
          description:
            'In this tutorial, we assume you are using an Arduino Uno, Arduino Duemilanove, Nano, or Diecimila. You also need a standard USB cable (A plug to B plug).',
        },
        {
          title: 'Step 2: Download the Arduino Environment',
          description:
            'Get the latest version from the Arduino download page. Install the environment to start programming.',
        },
        // Add more steps as needed
      ],
    },
  ];

  // Toggle block visibility
  toggleBlock(id: number): void {
    const block = this.blocks.find((b) => b.id === id);
    if (block) {
      block.isOpen = !block.isOpen;
    }
  }
}
