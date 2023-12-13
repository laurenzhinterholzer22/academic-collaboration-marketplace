import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    RouterModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

}
