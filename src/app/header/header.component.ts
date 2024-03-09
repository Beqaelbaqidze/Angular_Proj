import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  isProfileOptionsVisible: boolean = false;

  onhide() {
    this.isProfileOptionsVisible = !this.isProfileOptionsVisible;
  }
}

