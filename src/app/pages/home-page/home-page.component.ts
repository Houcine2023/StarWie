import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { GaleryComponent } from '../../components/galery/galery.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { WhatWeDoComponent } from '../../components/what-we-do/what-we-do.component';
import { ImpactsComponent } from '../../components/impacts/impacts.component';
import { NewsComponent } from "../../components/news/news.component";
import { CommunityComponent } from "../../components/community/community.component";
import { CommunityResourcesComponent } from "../../components/community-resources/community-resources.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    SignupComponent,
    GaleryComponent,
    WelcomeComponent,
    WhatWeDoComponent,
    ImpactsComponent,
    NewsComponent,
    CommunityComponent,
    CommunityResourcesComponent,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
