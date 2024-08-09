// event.service.ts
import { Injectable } from '@angular/core';

export interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: CalendarEvent[] = [];

  getEvents(): CalendarEvent[] {
    return this.events;
  }

  addEvent(event: CalendarEvent): void {
    this.events.push(event);
  }
}