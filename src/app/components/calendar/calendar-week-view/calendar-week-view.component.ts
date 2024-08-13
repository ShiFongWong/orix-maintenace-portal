import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfWeek, addDays, format } from 'date-fns';

interface Event {
  startTime: Date;
  endTime: Date;
  supervisor: string;
  ticketId: string;
}

@Component({
  selector: 'app-week-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-week-view.component.html',
  styleUrl: './calendar-week-view.component.css',
})

export class CalendarWeekViewComponent implements OnInit{
  @Input() date: Date = new Date(); // Add this line
  weekDays: Date[] = [];
  events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format

  ngOnInit() {
    this.setupWeekDays();
    this.loadEvents();
  }

  setupWeekDays() {
    const startOfWeekDate = startOfWeek(this.date, { weekStartsOn: 0 });
    this.weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfWeekDate, i));
  }

  loadEvents() {
    // Example event data
    this.events = {
      '8/11': [
        { startTime: new Date(), endTime: new Date(), supervisor: 'John Doe', ticketId: '12345' }
      ],
      '8/15': [
        { startTime: new Date(), endTime: new Date(), supervisor: 'Jane Doe', ticketId: '67890' },
        { startTime: new Date(), endTime: new Date(), supervisor: 'Jane Doe', ticketId: '67890' }
      ]
    };
  }

  hasEvents(day: Date): boolean {
    const dateString = format(day, 'M/d');
    return this.events[dateString] && this.events[dateString].length > 0;
  }
  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }
}
