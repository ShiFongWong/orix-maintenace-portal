import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  format, 
  isSameMonth, 
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay
} from 'date-fns';

interface CalendarNote {
  id: number;
  date: Date;
  text: string;
}

interface Event {
  startTime: Date;
  endTime: Date;
  supervisor: string;
  ticketId: string;
}

@Component({
  selector: 'app-month-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar-month-view.component.html',
  styleUrl: './calendar-month-view.component.css',
})

export class CalendarMonthViewComponent implements OnInit {
  @Input() date: Date = new Date();
  calendarDays: Date[][] = [];
  weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  notes: CalendarNote[] = [];
  isAddingNote = false;
  newNoteText = '';
  selectedDate: Date | null = null;
  events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format

  ngOnInit() {
    this.generateCalendarDays(this.date);
    this.loadEvents();
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

  generateCalendarDays(date: Date) {
    const start = startOfWeek(startOfMonth(date));
    const end = endOfWeek(endOfMonth(date));
    
    const days = eachDayOfInterval({ start, end });

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

  getNotesForDay(day: Date): CalendarNote[] {
    return this.notes.filter(note => isSameDay(note.date, day));
  }

  addNote(day: Date) {
    this.isAddingNote = true;
    this.selectedDate = day;
  }

  saveNote() {
    if (this.selectedDate && this.newNoteText.trim()) {
      const newNote: CalendarNote = {
        id: Date.now(),
        date: this.selectedDate,
        text: this.newNoteText.trim()
      };
      this.notes.push(newNote);
      this.cancelNote();
    }
  }

  cancelNote() {
    this.isAddingNote = false;
    this.newNoteText = '';
    this.selectedDate = null;
  }

  hasEvents(day: Date): boolean {
    const dateString = format(day, 'M/d');
    return this.events[dateString] && this.events[dateString].length > 0;
  }
  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }

  isSameMonth = isSameMonth;
}