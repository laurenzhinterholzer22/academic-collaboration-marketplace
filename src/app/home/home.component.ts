import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
