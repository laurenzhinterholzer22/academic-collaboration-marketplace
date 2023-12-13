import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  // add other routes here
];

export const AppRoutes = RouterModule.forRoot(routes);
