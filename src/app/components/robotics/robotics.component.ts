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
      title: 'Materials & Preparation',
      isOpen: true, // Open by default
      content: `
        <h2 class="text-2xl font-bold text-blue-700 mb-4">Build Materials (For each team)</h2>
        <h3 class="font-semibold text-lg mb-2">Required Materials</h3>
        <ul class="list-disc list-inside text-gray-800 mb-4">
          <li>Arduino Starter Kit (may be purchased individually or as a starter kit):
            <ul class="list-circle list-inside ml-6">
              <li>Arduino Uno</li>
              <li>3' USB Cable</li>
              <li>Solderless breadboard</li>
              <li>65 jumper wires</li>
              <li>Breadboard holder</li>
            </ul>
          </li>
          <li>Connectors</li>
          <li>LED bulbs</li>
          <li>Fan</li>
          <li>Insulators</li>
          <li>Breadboard (optional)</li>
        </ul>
        <h3 class="font-semibold text-lg">Testing Materials</h3>
        <p class="text-gray-800">
          Use the programmed Arduino board and LED bulbs for testing. See the "Testing Materials and Process"
          section for a Step-by-Step Arduino Setup Tutorial.
        </p>
      `,
      image: '/linefollower.jpg', // Update with the actual path
      imageAlt: 'Arduino materials setup'
    },
    {
      id: 2,
      title: 'Testing Materials & Process',
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
