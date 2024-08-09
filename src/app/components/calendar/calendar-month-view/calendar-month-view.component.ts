import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  format, 
  isSameMonth, 
  startOfWeek,
  addDays,
  subDays
} from 'date-fns';

@Component({
  selector: 'app-month-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-month-view.component.html',
  styleUrl: './calendar-month-view.component.css',
})

export class CalendarMonthViewComponent {
  currentDate = new Date();
  calendarDays: Date[][] = [];
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ngOnInit() {
    this.generateCalendarDays(this.currentDate);
  }

  generateCalendarDays(date: Date) {
    const start = startOfWeek(startOfMonth(date));
    const end = endOfMonth(date);
    
    let days = eachDayOfInterval({ start, end });

    // Ensure we have 6 weeks (42 days) for consistent layout
    while (days.length < 42) {
      days.push(addDays(days[days.length - 1], 1));
    }

    this.calendarDays = [];
    let week: Date[] = [];
    
    days.forEach(day => {
      if (week.length === 7) {
        this.calendarDays.push(week);
        week = [];
      }
      week.push(day);
    });
    
    if (week.length > 0) {
      this.calendarDays.push(week);
    }
  }

  format = format;
  isSameMonth = isSameMonth;
}