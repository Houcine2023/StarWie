import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  
  { path: 'login', component:LoginComponent },
  { path: 'register', component: SignupComponent },
  { path : '', component : HomePageComponent},
];
