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

  ngOnInit() {
    this.generateCalendarDays(this.date);
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

  format = format;
  isSameMonth = isSameMonth;
}