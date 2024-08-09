import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CalendarDayViewComponent } from './calendar-day-view/calendar-day-view.component';
import { CalendarWeekViewComponent } from './calendar-week-view/calendar-week-view.component';
import { CalendarMonthViewComponent } from './calendar-month-view/calendar-month-view.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule, 
    CalendarDayViewComponent, 
    CalendarWeekViewComponent, 
    CalendarMonthViewComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @Input() view: 'day' | 'week' | 'month' = 'month';
  currentDate: Date = new Date();
}