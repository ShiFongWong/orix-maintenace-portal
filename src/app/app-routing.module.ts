import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { MapComponent } from './components/map/map.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'approvals', component: ApprovalsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for a 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
