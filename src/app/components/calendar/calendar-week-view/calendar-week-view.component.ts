import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startOfWeek, addDays, format } from 'date-fns';
import { RouterModule, Router } from '@angular/router';

interface Event {
  startTime: string;
  endTime: string;
  marshal: string;
  ticketId: string;
}
@Component({
  selector: 'app-week-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './calendar-week-view.component.html',
  styleUrl: './calendar-week-view.component.css',
})

export class CalendarWeekViewComponent implements OnInit, OnChanges{
  @Input() date: Date = new Date(); // Add this line
  @Input() events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format
  weekDays: Date[] = [];
  selectedEvent: Event|null = null;
  private mouseDownTimer: any;
  private readonly disableClickTime = 100; // Time in milliseconds to wait before disabling the click


  constructor(
    private router:Router,
  ){}

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

  showPopup( event : Event ){
    this.selectedEvent = event;
  }
  hidePopup(){
    this.selectedEvent = null;
  }

  editTicket(detail:Event){
    if (this.mouseDownTimer) {
      clearTimeout(this.mouseDownTimer);
    }
    this.router.navigate([`/tickets/edit/${detail?.ticketId}`]);
  }

  onMouseDown(event: MouseEvent) {
    // Only start the timer for left-clicks (button value 0)
    if (event.button === 0) { // Left-click
      this.mouseDownTimer = setTimeout(() => {
        this.mouseDownTimer = null; // Reset timer
      }, this.disableClickTime);
    }
  }

  onMouseUp(event: MouseEvent, detail:Event) {
    // Only execute the function for left-clicks (button value 0)
    if (event.button === 0) { // Left-click
      if (this.mouseDownTimer) {
        clearTimeout(this.mouseDownTimer);
        this.mouseDownTimer = null; // Reset timer
        this.editTicket(detail); // Call the function if mouse up is within the time limit
      }
    }
  }
}
