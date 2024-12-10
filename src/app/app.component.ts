import { Component, HostListener, Renderer2  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';



import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StarWie';

  private lastScrollY = 0;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    // If scrolling down
    if (currentScrollY > this.lastScrollY) {
      this.renderer.setStyle(
        document.getElementById('navbar'),
        'transform',
        'translateY(-100%)'
      );
    } 
    // If scrolling up
    else {
      this.renderer.setStyle(
        document.getElementById('navbar'),
        'transform',
        'translateY(0)'
      );

    }
  }
   
}
