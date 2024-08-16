import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { MapComponent } from './components/map/map.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';
import {NewOrdersComponent} from "./components/new-orders/new-orders.component";
import {EditOrdersComponent} from "./components/edit-orders/edit-orders.component";
import {NewTicketComponent} from "./components/new-ticket/new-ticket.component";
import {EditTicketComponent} from "./components/edit-ticket/edit-ticket.component";
import {NewWorkshopComponent} from "./components/new-workshop/new-workshop.component";
import {EditWorkshopComponent} from "./components/edit-workshop/edit-workshop.component";
import {NewVehicleComponent} from "./components/new-vehicle/new-vehicle.component";
import {EditVehicleComponent} from "./components/edit-vehicle/edit-vehicle.component";
import {NewUserComponent} from "./components/new-user/new-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {NewServiceComponent} from "./components/new-service/new-service.component";
import {EditServiceComponent} from "./components/edit-service/edit-service.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {BranchesComponent} from "./components/branches/branches.component";
import {OfficesComponent} from "./components/offices/offices.component";
import {ApprovalRulesComponent} from "./components/approval-rules/approval-rules.component";
import {DepartmentsComponent} from "./components/departments/departments.component";
import {AuthorizersComponent} from "./components/authorizers/authorizers.component";
import {EditBranchComponent} from "./components/edit-branch/edit-branch.component";
import {NewBranchComponent} from "./components/new-branch/new-branch.component";
import {EditOfficeComponent} from "./components/edit-office/edit-office.component";
import {NewOfficeComponent} from "./components/new-office/new-office.component";
import {EditDepartmentComponent} from "./components/edit-department/edit-department.component";
import {NewDepartmentComponent} from "./components/new-department/new-department.component";
import {EditAuthorizerComponent} from "./components/edit-authorizer/edit-authorizer.component";
import {NewAuthorizerComponent} from "./components/new-authorizer/new-authorizer.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/new', component: NewOrdersComponent },
  { path: 'orders/edit', component: EditOrdersComponent },
  { path: 'approvals', component: ApprovalsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/new', component: NewTicketComponent },
  { path: 'tickets/edit', component: EditTicketComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'workshops/new', component: NewWorkshopComponent },
  { path: 'workshops/edit', component: EditWorkshopComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicles/new', component: NewVehicleComponent },
  { path: 'vehicles/edit', component: EditVehicleComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent },
  { path: 'users/edit', component: EditUserComponent },
  { path: 'resources/branches', component: BranchesComponent },
  { path: 'resources/branches/edit', component: EditBranchComponent },
  { path: 'resources/branches/new', component: NewBranchComponent },
  { path: 'resources/offices', component: OfficesComponent },
  { path: 'resources/offices/edit', component: EditOfficeComponent },
  { path: 'resources/offices/new', component: NewOfficeComponent },
  { path: 'resources/approval-rules', component: ApprovalRulesComponent },
  { path: 'resources/departments', component: DepartmentsComponent },
  { path: 'resources/departments/edit', component: EditDepartmentComponent },
  { path: 'resources/departments/new', component: NewDepartmentComponent },
  { path: 'resources/authorizers', component: AuthorizersComponent },
  { path: 'resources/authorizers/edit', component: EditAuthorizerComponent },
  { path: 'resources/authorizers/new', component: NewAuthorizerComponent },
  { path: 'resources/services', component: ServicesComponent },
  { path: 'resources/services/new', component: NewServiceComponent },
  { path: 'resources/services/edit', component: EditServiceComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for a 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
