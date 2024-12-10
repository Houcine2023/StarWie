import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DropSection {
  title : string,
  links : {label : string, url : string}[],
}


@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {
  ishovered : boolean= false;

  hoverin() {
    this.ishovered = !this.ishovered;
  }
  hoverout(){
    this.ishovered =  !this.ishovered;
  }
  DropSec : DropSection[] = [
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
    {
      title : "Recource Type",
      links : [
        { label: 'Training Courses', url: '/trainingcourse' },
        { label: ' Grants', url: '/grants' },
      ]
    },
  ]

  hoveredSection: DropSection | null = null;


  /*
  
  <ul class="flex items-center justify-around w-[70%] gap-5 text-xl">
      <li class="flex gap-1">
        Recource Type
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      <li class="flex gap-1">
        Collection
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      <li class="flex gap-1">
        STEM Fields
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        
      </li>
      <li class="flex gap-1">
        Age Groups
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      <li class="flex gap-1">
        Categorie
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
    </ul>
  
  */ 

}
