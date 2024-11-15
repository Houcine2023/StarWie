import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { GaleryComponent } from '../../components/galery/galery.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, GaleryComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
