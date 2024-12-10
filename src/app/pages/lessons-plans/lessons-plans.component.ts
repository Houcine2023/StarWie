import { Component } from '@angular/core';
import { DropDownComponent } from '../../components/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';

interface lessonsPlans {
  image: string;
  lessonplan: string;
  title: string;
  categories: { label: string; url: string }[];
  paragraph: string;
  buttTitle: string;
}

@Component({
  selector: 'app-lessons-plans',
  standalone: true,
  imports: [DropDownComponent, CommonModule],
  templateUrl: './lessons-plans.component.html',
  styleUrl: './lessons-plans.component.css',
})
export class LessonsPlansComponent {
  lessons: lessonsPlans[] = [
    {
      image: '/ai.jpg',
      lessonplan: 'lesson Plan',
      title: 'AI and Machine Learning Methods',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Sponsored Lesson by KEYSIGHT Technologies In this activity, we explore artificial intelligence and machine learning. Students work with the Teachable Machine to train their computer…',
      buttTitle : "Read More",
    },
    {
      image: '/ship.avif',
      lessonplan: 'Lesson Plan',
      title: 'Making of Microship',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Students take on the role of a Semiconductor Engineer as they make a model of a microchip. Along the way, they will also need to…',
      buttTitle : "Read More",
    },
    {
      image: '/ai.jpg',
      lessonplan: 'lesson Plan',
      title: 'AI and Machine Learning Methods',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Sponsored Lesson by KEYSIGHT Technologies In this activity, we explore artificial intelligence and machine learning. Students work with the Teachable Machine to train their computer…',
      buttTitle : "Read More",
    },
    {
      image: '/ai.jpg',
      lessonplan: 'lesson Plan',
      title: 'AI and Machine Learning Methods',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Sponsored Lesson by KEYSIGHT Technologies In this activity, we explore artificial intelligence and machine learning. Students work with the Teachable Machine to train their computer…',
      buttTitle : "Read More",
    },
    {
      image: '/ai.jpg',
      lessonplan: 'lesson Plan',
      title: 'AI and Machine Learning Methods',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Sponsored Lesson by KEYSIGHT Technologies In this activity, we explore artificial intelligence and machine learning. Students work with the Teachable Machine to train their computer…',
      buttTitle : "Read More",
    },
    {
      image: '/ai.jpg',
      lessonplan: 'lesson Plan',
      title: 'AI and Machine Learning Methods',
      categories: [
        {
          label: 'Engineering Discipline',
          url: 'Electrical/electronics/Engineering',
        },
        { label: 'Age Group', url: '11-13 14-17' },
      ],
      paragraph:
        'Sponsored Lesson by KEYSIGHT Technologies In this activity, we explore artificial intelligence and machine learning. Students work with the Teachable Machine to train their computer…',
      buttTitle : "Read More",
    },
  ];
}
