import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule,DatePipe  } from '@angular/common';
import { MatDatepickerModule, MatDatepicker  } from '@angular/material/datepicker';
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
  @ViewChild('picker') datepicker!: MatDatepicker<Date>;
  @Input() view: 'day' | 'week' | 'month' = 'day';
  currentDate: Date = new Date();
  get displayDate(): { datePart: string, dayPart: string } {
    switch (this.view) {
      case 'day':
        const dateStr = this.formatDate(this.currentDate, 'yyyy-M-d');
        const dayStr = this.formatDate(this.currentDate, 'EEE');
        return { datePart: dateStr, dayPart: dayStr };
      case 'week':
        const startOfWeek = this.getStartOfWeek(this.currentDate);
        const endOfWeek = this.getEndOfWeek(this.currentDate);
        return { datePart: `${this.formatDate(startOfWeek, 'yyyy-M-d')} to ${this.formatDate(endOfWeek, 'yyyy-M-d')}`, dayPart: '' };
      case 'month':
        return { datePart: this.formatDate(this.currentDate, 'yyyy-M'), dayPart: '' };
      default:
        return { datePart: '', dayPart: '' };
    }
  }
  

  formatDate(date: Date, format: string): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format) || '';
  }

  getStartOfWeek(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  getEndOfWeek(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? 0 : 7);
    return new Date(d.setDate(diff));
  }

  onDatePickerClosed() {
    // The selected date will be automatically updated in the currentDate property
    // We just need to trigger change detection
    this.currentDate = new Date(this.currentDate);
  }
}