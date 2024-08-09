import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CalendarMonthViewComponent } from './components/calendar/calendar-month-view/calendar-month-view.component';
import { CalendarWeekViewComponent } from './components/calendar/calendar-week-view/calendar-week-view.component';
import { CalendarDayViewComponent } from './components/calendar/calendar-day-view/calendar-day-view.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MapComponent,
    OrdersComponent,
    ApprovalsComponent,
    TicketsComponent,
    WorkshopsComponent,
    VehiclesComponent,
    UsersComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
