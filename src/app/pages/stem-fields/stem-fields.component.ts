import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface lessonsPlans {
  image: string;
  lessonplan: string;
  title: string;
  categories: { label: string; url: string }[];
  paragraph: string;
  buttTitle: string;
}

interface stat {
  num: string;
  paragraph: string;
}

@Component({
  selector: 'app-stem-fields',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stem-fields.component.html',
  styleUrl: './stem-fields.component.css',
})
export class StemFieldsComponent {
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
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
      buttTitle: 'Read More',
    },
  ];

  statestic: stat[] = [
    {
      num: '72%',
      paragraph: 'STEM jobs are growing faster than non-STEM fields.',
    },
    {
      num: '$87K',
      paragraph: 'The average salary for STEM occupations.',
    },
    {
      num: '2.4M',
      paragraph: 'Projected STEM job openings by 2030.',
    },
  ];
  paragraphs: string[] = [
    'STEM stands for Science, Technology, Engineering, and Mathematics',
    '—a collection of disciplines that drive innovation, critical thinking, and problem-solving. These fields form the backbone of modern society, influencing advancements in healthcare, communication, transportation, and countless other industries.',
    'By studying STEM, individuals gain the tools to explore the mysteries of the universe, develop life-saving technologies, engineer sustainable solutions, and decode the mathematical patterns that shape our world. Whether it’s discovering new medicines, building bridges, creating AI systems, or solving equations, STEM is about curiosity, creativity, and making an impact.',
    ' STEM careers are among the fastest-growing and highest-paying fields globally, offering opportunities to contribute meaningfully to the challenges and opportunities of the 21st century.',
    'STEM resources are tools, guides, and materials designed to support  learning and exploration in Science, Technology, Engineering, and  Mathematics. These include interactive platforms, educational apps, hands-on project kits, and research materials that help students and educators delve deeper into STEM concepts. By leveraging these resources, individuals can build critical skills, stay updated with advancements, and foster innovation in their respective fields.',
  ];
}
