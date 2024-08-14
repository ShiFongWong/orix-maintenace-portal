import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

interface Event {
  startTime: string;
  endTime: string;
  marshal: string;
  ticketId: string;
}
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
export class CalendarComponent implements OnInit{
  @ViewChild('picker') datepicker!: MatDatepicker<Date>;
  @Input() view: 'day' | 'week' | 'month' = 'day';
  currentDate: Date = new Date();
  events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format
  marshalCounts: { [key: string]: number } = {};
  marshalList: { name: string, count: number }[] = [];

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
  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    // Example event data
    this.events = {
      '8/12': [
        { startTime: "8:00", endTime: "8:15", marshal: 'Jumaana binti Khaleel John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "8:45", endTime: "9:15", marshal: 'Jumaana binti Khaleel', ticketId: '12345678' },
        { startTime: "9:30", endTime: "10:15", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "9:30", endTime: "10:15", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "9:30", endTime: "10:15", marshal: 'John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "10:15", endTime: "10:30", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "10:15", endTime: "10:30", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "10:15", endTime: "10:30", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "10:30", endTime: "11:00", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "10:30", endTime: "11:00", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "10:30", endTime: "11:00", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "11:00", endTime: "12:00", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "8:00", endTime: "12:15", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "9:30", endTime: "11:00", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "12:15", endTime: "12:45", marshal: 'John Doeohn John Doe My Name Is You Try To Guess??ohn John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John Doe', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
      ],
        '8/11': [
          { startTime: "13:15", endTime: "14:45", marshal: 'John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
      ],
        '8/15': [
        { startTime: "13:15", endTime: "14:45", marshal: 'John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
        { startTime: "13:15", endTime: "14:45", marshal: 'John Doe My Name Is You Try To Guess??', ticketId: '12345678' },
      ]
    };
  // Sorting each date's events by startTime and then by endTime
  for (let date in this.events) {
    this.events[date].sort((a, b) => {
      const startTimeComparison = this.compareTime(a.startTime, b.startTime);
      if (startTimeComparison !== 0) {
        return startTimeComparison;
      }
      return this.compareTime(a.endTime, b.endTime);
    });
  }
  this.countMarshals();
}

// Helper method to compare time strings
compareTime(time1: string, time2: string): number {
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);
  
  if (hours1 !== hours2) {
    return hours1 - hours2;
  }
  return minutes1 - minutes2;
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

  countMarshals() {
    const marshalCounts: { [key: string]: number } = {};
  
    for (let date in this.events) {
      this.events[date].forEach(event => {
        const marshal = event.marshal;
        if (marshalCounts[marshal]) {
          marshalCounts[marshal]++;
        } else {
          marshalCounts[marshal] = 1;
        }
      });
    }
  
    this.marshalCounts = marshalCounts;
    this.generateMarshalList()
  }
  generateMarshalList() {
    this.marshalList = Object.keys(this.marshalCounts).map(marshal => ({
      name: marshal,
      count: this.marshalCounts[marshal]
    }));
  }
}