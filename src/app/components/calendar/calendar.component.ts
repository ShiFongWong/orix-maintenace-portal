import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonModule,DatePipe,formatDate } from '@angular/common';
import { MatDatepickerModule, MatDatepicker  } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule, NzRangePickerComponent, NzDatePickerComponent, NzMonthPickerComponent, CompatibleDate } from 'ng-zorro-antd/date-picker';
import {addWeeks, endOfWeek, startOfWeek , startOfMonth, endOfMonth} from "date-fns";
import { BehaviorSubject } from 'rxjs';

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
    CalendarMonthViewComponent,
    NzDatePickerModule,
    NzRangePickerComponent,
    NzDatePickerComponent,
    NzMonthPickerComponent
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
  isSearching = false;
  searchQuery = '';
  isFiltering = false;
  CalendarSeparator = "to";
  selectedRange: Date[] = [this.getStartOfWeek(this.currentDate),this.getEndOfWeek(this.currentDate)];
  selectedDate:Date = new Date();
  selectedMonth: Date = new Date();
  formattedWeek: any;

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
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)-1;
    return new Date(d.setDate(diff));
  }

  getEndOfWeek(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? 0 : 7)-1;
    return new Date(d.setDate(diff));
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

  setPrev() {
    if(this.view=='day'){
      var prev;
      if (this.selectedDate) {
        prev = new Date(this.selectedDate); // Create a copy of the selected date

      }
      else{
        prev = new Date();
      }
      prev.setDate(prev.getDate() - 1); // Subtract one day
      this.selectedDate = prev; // Update the selected date
    }
    else if(this.view == 'week'){
      var prev;
      if (this.selectedRange) {
        prev = new Date(this.selectedRange[0]); // Create a copy of the selected date
      }
      else{
        prev = new Date(); // Create a copy of the selected date
      }
      prev.setDate(prev.getDate() - 1); // Subtract one day
      this.selectedRange = [startOfWeek(prev),endOfWeek(prev)]; // Update the selected date
    }
    else if(this.view == 'month'){
      var prev;
      if (this.selectedMonth) {
        prev = new Date(startOfMonth(this.selectedMonth)); // Create a copy of the selected date
      }
      else{
        prev = new Date(); // Create a copy of the selected date
      }
      prev.setDate(prev.getDate() - 1); // Subtract one day
      this.selectedMonth = prev; // Update the selected date
    }
  }

  setNext(){
    if(this.view=='day'){
      var prev;
      if (this.selectedDate) {
        prev = new Date(this.selectedDate); // Create a copy of the selected date

      }
      else{
        prev = new Date();
      }
      prev.setDate(prev.getDate() + 1); // Subtract one day
      this.selectedDate = prev; // Update the selected date
    }
    else if(this.view == 'week'){
      var prev;
      if (this.selectedRange) {
        prev = new Date(this.selectedRange[1]); // Create a copy of the selected date
      }
      else{
        prev = new Date(); // Create a copy of the selected date
      }
      prev.setDate(prev.getDate() + 1); // Subtract one day
      this.selectedRange = [startOfWeek(prev),endOfWeek(prev)]; // Update the selected date
    }
    else if(this.view == 'month'){
      var prev;
      if (this.selectedMonth) {
        prev = new Date(endOfMonth(this.selectedMonth)); // Create a copy of the selected date
      }
      else{
        prev = new Date(); // Create a copy of the selected date
      }
      prev.setDate(prev.getDate() + 1); // Subtract one day
      this.selectedMonth = prev; // Update the selected date
    }
  }

  setToday(): void {
    var today = new Date();
    if(this.view=='day'){
      this.selectedDate = today; // Update the selected date
    }
    else if(this.view == 'week'){
      this.selectedRange = [today,today]; // Update the selected date
    }
    else if(this.view == 'month'){
      this.selectedMonth = today; // Update the selected date
    }
  }

  onOk(result: CompatibleDate | null): void {
    if (Array.isArray(result)) {
      this.selectedRange = result;
    } else {
      this.selectedRange = [];
    }
  }
  get formattedWeekDisplay(): string {
    if (this.selectedDate) {
      const startOfWeek = this.getStartOfWeek(this.selectedDate);
      const endOfWeek = this.getEndOfWeek(this.selectedDate);
      return `${formatDate(startOfWeek, 'yyyy-MM-dd', 'en-US')} to ${formatDate(endOfWeek, 'yyyy-MM-dd', 'en-US')}`;
    }
    return '';
  }
}