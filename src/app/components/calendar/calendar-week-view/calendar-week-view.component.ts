import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfWeek, addDays, format } from 'date-fns';

interface Event {
  startTime: string;
  endTime: string;
  marshal: string;
  ticketId: string;
}
@Component({
  selector: 'app-week-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-week-view.component.html',
  styleUrl: './calendar-week-view.component.css',
})

export class CalendarWeekViewComponent implements OnInit, OnChanges{
  @Input() date: Date = new Date(); // Add this line
  @Input() events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format
  weekDays: Date[] = [];

  ngOnInit() {
    this.setupWeekDays();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date'] || changes['events']) {
      this.setupWeekDays();
    }
  }

  setupWeekDays() {
    const startOfWeekDate = startOfWeek(this.date, { weekStartsOn: 0 });
    this.weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfWeekDate, i));
  }


  hasEvents(day: Date): boolean {
    const dateString = format(day, 'M/d');
    return this.events[dateString] && this.events[dateString].length > 0;
  }
  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }
}
