import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { SidebarService } from "../../services/sidebar.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, OnDestroy {
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

  isCollapsed: boolean;
  isSmallScreen: boolean = false; // Initialize here
  private routerSubscription: Subscription;
  private mediaQueryList: MediaQueryList;
  private mediaQueryListener: (event: MediaQueryListEvent) => void;

  constructor(private router: Router, private sidebarService: SidebarService) {
    this.isCollapsed = this.sidebarService.getCollapseState();

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState();
      }
    });

    this.mediaQueryList = window.matchMedia('(max-width: 1366px)');
    this.mediaQueryListener = (event: MediaQueryListEvent) => this.handleMediaQueryChange(event);

    // Initialize isSmallScreen in the constructor
    this.isSmallScreen = this.mediaQueryList.matches;
  }

  ngOnInit() {
    this.mediaQueryList.addListener(this.mediaQueryListener);
    this.updateGridVariable(); // Call this to set initial grid value
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.mediaQueryList.removeListener(this.mediaQueryListener);
  }

  isActiveLink(link: string): boolean {
    return this.router.url.includes(link);
  }

  updateActiveState() {
    // Potentially update other state based on the current route
  }

  onCollapsed() {
    this.sidebarService.toggleCollapse();
    this.isCollapsed = this.sidebarService.getCollapseState();
    this.updateGridVariable();
  }

  private handleMediaQueryChange(mql: MediaQueryList | MediaQueryListEvent) {
    this.isSmallScreen = mql.matches;
    this.updateGridVariable();
  }

  private updateGridVariable() {
    let gridValue: string;
    if (this.isSmallScreen) {
      gridValue = this.isCollapsed ? '2' : '4';
    } else {
      gridValue = this.isCollapsed ? '2' : '3';
    }
    document.documentElement.style.setProperty('--start-grid', gridValue);
    document.documentElement.style.setProperty('--left-margin-floating', this.isCollapsed ? '120px' : '300px');
  }
}
