
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';

@Component({
  selector: 'app-day-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="month-grid">
      <div *ngFor="let day of days" class="day">
        {{ format(day, 'd') }}
      </div>
    </div>
  `,
  styles: [`
    .month-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
    .day {
      border: 1px solid #ccc;
      padding: 5px;
    }
  `]
})
export class CalendarDayViewComponent {
  @Input() set date(value: Date) {
    this.days = this.getDaysInMonth(value);
  }

  days: Date[] = [];

  getDaysInMonth(date: Date): Date[] {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  }

  format = format;
}