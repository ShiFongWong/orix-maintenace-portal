// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CalendarDayViewComponent } from './calendar-day-view/calendar-day-view.component';
import { CalendarWeekViewComponent } from './calendar-week-view/calendar-week-view.component';
import { CalendarMonthViewComponent } from './calendar-month-view/calendar-month-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, FormsModule, CalendarDayViewComponent, CalendarWeekViewComponent, CalendarMonthViewComponent],
  template: `
    <h1>My Calendar</h1>
    <mat-button-toggle-group [(ngModel)]="currentView">
      <mat-button-toggle value="day">Day</mat-button-toggle>
      <mat-button-toggle value="week">Week</mat-button-toggle>
      <mat-button-toggle value="month">Month</mat-button-toggle>
    </mat-button-toggle-group>

    <ng-container [ngSwitch]="currentView">
      <app-day-view *ngSwitchCase="'day'" [date]="currentDate"></app-day-view>
      <app-week-view *ngSwitchCase="'week'" [date]="currentDate"></app-week-view>
      <app-month-view *ngSwitchCase="'month'" [date]="currentDate"></app-month-view>
    </ng-container>
  `
})
export class CalendarComponent {
  currentView: 'day' | 'week' | 'month' = 'month';
  currentDate = new Date();
}