import { Component } from '@angular/core';
import { BasicServiceService } from '../services/basic.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private basicService: BasicServiceService) {}

  userName: string = this.basicService.getUserName();

  currentRole: 'seeker' | 'company' = 'seeker';

  switchRole(role: 'seeker' | 'company') {
    this.currentRole = role;
  }
}
