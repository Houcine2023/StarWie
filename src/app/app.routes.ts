import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { TeachersComponent } from './pages/teachers_lessons/teachers.component';
import { RecourcesComponent } from './pages/recources/recources.component';
import { GamesComponent } from './pages/games/games.component';
import { StemFieldsComponent } from './pages/stem-fields/stem-fields.component';
import { TrainingCourseComponent } from './pages/training-course/training-course.component';
import { ChosingUniversityComponent } from './pages/chosing-university/chosing-university.component';
import { GrantsComponent } from './pages/grants/grants.component';


export const routes: Routes = [
  
  { path: 'login', component:LoginComponent },
  { path: 'register', component: SignupComponent },
  { path : '', component : HomePageComponent},
  { path : 'Teacherslessons', component : TeachersComponent},
  { path : 'Resources', component : RecourcesComponent},
  { path : 'games', component : GamesComponent},
  { path : 'stemfields', component : StemFieldsComponent},
  { path : 'trainingcourse', component : TrainingCourseComponent},
  { path : 'University', component : ChosingUniversityComponent},
  { path : 'grants', component : GrantsComponent},
];
