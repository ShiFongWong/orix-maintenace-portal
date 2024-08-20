import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled7';
  isCollapsed: boolean = false;

  receiveCollapseStatus(value: boolean) {
    this.isCollapsed = value;
  }
}
