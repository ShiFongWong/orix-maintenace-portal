import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { format, addMinutes, startOfDay, differenceInMinutes } from 'date-fns';

interface Event {
  startTime: string;
  endTime: string;
  supervisor: string;
  ticketId: string;
}
interface ProcessedEvent {
  event: Event;
  column: number;
  width: number;
  left: number;
}
@Component({
  selector: 'app-day-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-day-view.component.html',
  styleUrl: './calendar-day-view.component.css',
})
export class CalendarDayViewComponent implements OnInit {
  @Input() date: Date = new Date();
  hours: string[] = [];
  minutes: string[] = ['00', '15', '30', '45'];
  startHour: number = 8;
  endHour: number = 18;
  currentTimePosition: number = 0;
  events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format
  processedEvents: ProcessedEvent[] = [];

  ngOnInit() {
    this.generateHours();
    this.updateCurrentTimeLine();
    setInterval(() => this.updateCurrentTimeLine(), 60000); // Update every minute
    this.loadEvents();
    this.processEvents();
  }

  loadEvents() {
    // Example event data
    this.events = {
      '8/12': [
        { startTime: "8:00", endTime: "8:15", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "8:45", endTime: "9:15", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "9:30", endTime: "10:15", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "10:30", endTime: "11:00", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "11:00", endTime: "12:00", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "8:00", endTime: "12:15", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "9:30", endTime: "11:00", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "12:15", endTime: "12:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },
        { startTime: "13:15", endTime: "14:45", supervisor: 'John Doe', ticketId: '12345' },

      ]
    };
  }

  generateHours() {
    this.hours = Array.from(
      { length: this.endHour - this.startHour },
      (_, i) => (i + this.startHour).toString()
    );
  }

  updateCurrentTimeLine() {
    const now = new Date();
    const dayStart = startOfDay(this.date);
    var minutesSinceDayStart = differenceInMinutes(now, dayStart);
    if(minutesSinceDayStart/60>this.endHour){
      minutesSinceDayStart=this.endHour*60;
    }else if(minutesSinceDayStart/60<this.startHour){
      minutesSinceDayStart=this.startHour*60;
    }
    this.currentTimePosition = (minutesSinceDayStart / 60-this.startHour) * 180; // 60px per hour
  }

  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  processEvents() {
    const sortedEvents = this.events['8/12'].sort((a, b) => 
      this.timeToMinutes(a.startTime) - this.timeToMinutes(b.startTime) ||
      this.timeToMinutes(b.endTime) - this.timeToMinutes(a.endTime)
    );
  
    let columns: ProcessedEvent[][] = [];
  
    sortedEvents.forEach(event => {
      let columnIndex = 0;
      let placedEvent: ProcessedEvent | null = null;
  
      while (!placedEvent) {
        if (!columns[columnIndex]) {
          columns[columnIndex] = [];
        }
  
        const conflictingEvent = columns[columnIndex].find(existingEvent => 
          this.overlaps(existingEvent.event, event)
        );
  
        if (!conflictingEvent) {
          placedEvent = { event, column: columnIndex, width: 1, left: columnIndex };
          columns[columnIndex].push(placedEvent);
        } else {
          columnIndex++;
        }
      }
    });
  
    // Adjust widths and positions
    this.processedEvents = columns.flat().map(event => {
      const colSpan = this.getColumnSpan(event, columns);
      return {
        ...event,
        width: colSpan,
        left: event.column / columns.length
      };
    });
  }
  
  getColumnSpan(event: ProcessedEvent, columns: ProcessedEvent[][]): number {
    let span = 1;
    const startCol = event.column;
  
    for (let i = startCol + 1; i < columns.length; i++) {
      if (columns[i].some(e => this.overlaps(e.event, event.event))) {
        break;
      }
      span++;
    }
  
    return span;
  }
  
  getEventStyle(eventData: ProcessedEvent) {
    const start = this.timeToMinutes(eventData.event.startTime) - this.startHour * 60;
    const end = this.timeToMinutes(eventData.event.endTime) - this.startHour * 60;
  
    const top = start * 3; // Each minute is 3px
    const height = (end - start) * 3; // Duration in minutes multiplied by 3
    const width = `${(eventData.width / this.processedEvents.length) * 100}%`;
    const left = `calc(${eventData.left * 100}% + 60px)`;
  
    return {
      top: `${top}px`,
      height: `${height}px`,
      width: width,
      left: left,
    };
  }
  
  overlaps(event1: Event, event2: Event): boolean {
    return this.timeToMinutes(event1.startTime) < this.timeToMinutes(event2.endTime) &&
           this.timeToMinutes(event2.startTime) < this.timeToMinutes(event1.endTime);
  }
}