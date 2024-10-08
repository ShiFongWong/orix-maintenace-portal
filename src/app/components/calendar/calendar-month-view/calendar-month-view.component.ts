import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';

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
  startTime: string;
  endTime: string;
  marshal: string;
  ticketId: string;
}
@Component({
  selector: 'app-month-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './calendar-month-view.component.html',
  styleUrl: './calendar-month-view.component.css',
})

export class CalendarMonthViewComponent implements OnInit, OnChanges {
  @Input() date: Date = new Date();
  @Input() events: { [key: string]: Event[] } = {}; // Keyed by date in 'M/d' format

  calendarDays: Date[][] = [];
  weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  selectedDate: Date | null = null;
  showMore: boolean = false;
  popoverPosition = { top: 0, left: 0 };
  selectedEvent: Event|null = null;
  currentPopoverDay: any;
  isPopupActive:boolean = false;
  private mouseDownTimer: any;
  private readonly disableClickTime = 100; // Time in milliseconds to wait before disabling the click
  
  constructor(
    private sidebarService: SidebarService,
    private router:Router
  ){}

  ngOnInit() {
    this.generateCalendarDays(this.date);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date'] || changes['events']) {
      this.generateCalendarDays(this.date);
    }
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

  hasEvents(day: Date): boolean {
    const dateString = format(day, 'M/d');
    return this.events[dateString] && this.events[dateString].length > 0;
  }

  showPopover(event: MouseEvent, day: Date) {
    this.showMore = true;
    var lesswidth = 0;
    if(this.sidebarService.getCollapseState()){
      lesswidth = 90; 
    }else{
      lesswidth = 280;
    }

    this.popoverPosition = {
      top: event.clientY + window.scrollY - 50, // Adjust Y position based on mouse location
      left: event.clientX + window.scrollX - lesswidth - 50// Adjust X position based on mouse location
    };
    this.currentPopoverDay = day;
  }

  hidePopover() {
    this.showMore = false;
    if(this.isPopupActive){
      this.isPopupActive = !this.isPopupActive;
    }
  }
  
  editTicket() {
    if (this.mouseDownTimer) {
      clearTimeout(this.mouseDownTimer);
    }
    this.router.navigate([`/tickets/edit/${this.selectedEvent?.ticketId}`]);
  }

  showPopup( mouse: MouseEvent, event : Event ){
    this.selectedEvent = event;
    var lesswidth;
    if(this.sidebarService.getCollapseState()){
      lesswidth = 90; 
    }else{
      lesswidth = 280;
    }

    this.popoverPosition = {
      top: mouse.clientY + window.scrollY - 50, // Adjust Y position based on mouse location
      left: mouse.clientX + window.scrollX - lesswidth - 50// Adjust X position based on mouse location
    };
  }

  hidePopup(){
    this.selectedEvent = null;
  }

  onMouseDown(event: MouseEvent) {
    // Only start the timer for left-clicks (button value 0)
    if (event.button === 0) { // Left-click
      this.mouseDownTimer = setTimeout(() => {
        this.mouseDownTimer = null; // Reset timer
      }, this.disableClickTime);
    }
  }

  onMouseUp(event: MouseEvent) {
    // Only execute the function for left-clicks (button value 0)
    if (event.button === 0) { // Left-click
      if (this.mouseDownTimer) {
        clearTimeout(this.mouseDownTimer);
        this.mouseDownTimer = null; // Reset timer
        this.editTicket(); // Call the function if mouse up is within the time limit
      }
    }
  }

  togglePopup() {
    this.isPopupActive = !this.isPopupActive;
  }

  checkmore(day: Date): boolean {
    const eventsForDay = this.events[format(day, 'M/d')] || [];
    return eventsForDay.length > 8;
  }

  format(date: Date, formatString: string): string {
    return format(date, formatString);
  }

  isSameMonth = isSameMonth;
}