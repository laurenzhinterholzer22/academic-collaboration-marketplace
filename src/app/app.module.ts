import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {RouterLink, RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
// Import other necessary modules and components

@NgModule({
  declarations: [
    // other components declarations
  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutes,
    MatInputModule,
    MatInputModule,
    RouterModule,
    RouterLink,
    MatToolbarModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
