import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    {title: 'Dashboard', icon: 'dashboard', link: '/dashboard'},
    {title: 'Map', icon: 'map', link: '/map'},
    {title: 'Orders', icon: 'orders', link: '/orders'},
    {title: 'Approvals', icon: 'approvals', link: '/approvals'},
    {title: 'Tickets', icon: 'tickets', link: '/tickets'},
    {title: 'Calendar', icon: 'calendar', link: '/calendar'},
    {title: 'Workshops', icon: 'workshops', link: '/workshops'},
    {title: 'Vehicles', icon: 'vehicles', link: '/vehicles'},
    {title: 'Users', icon: 'users', link: '/users'},
    {title: 'Services', icon: 'services', link: '/services'},
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState();
      }
    });
  }

  isActiveLink(link: string): boolean {
    return this.router.url.includes(link) ;
  }

  updateActiveState() {
    // Potentially update other state based on the current route
  }
}
