import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  setCollapseState(state: boolean) {
    this.isCollapsed = state;
  }

  getCollapseState() {
    return this.isCollapsed;
  }
}
