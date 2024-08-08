import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    {title: 'Dashboard', icon: 'dashboard.svg', link: '/dashboard'},
    {title: 'Map', icon: 'map.svg', link: '/map'},
    {title: 'Orders', icon: 'orders.svg', link: '/orders'},
    {title: 'Approvals', icon: 'approvals.svg', link: '/approvals'},
    {title: 'Tickets', icon: 'tickets.svg', link: '/tickets'},
    {title: 'Calendar', icon: 'calendar.svg', link: '/calendar'},
    {title: 'Workshops', icon: 'workshops.svg', link: '/workshops'},
    {title: 'Vehicles', icon: 'vehicles.svg', link: '/vehicles'},
    {title: 'Users', icon: 'users.svg', link: '/users'},
    {title: 'Services', icon: 'services.svg', link: '/services'},
  ];
}
