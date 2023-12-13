import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    RouterModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userName = '';

  constructor(private userService: UserService) {}

}
