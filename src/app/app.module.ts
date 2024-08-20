import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

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
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { WorkshopsComponent } from './components/workshops/workshops.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';
import { SearchbarComponent } from './components/map/searchbar/searchbar.component';
import { NewOrdersComponent } from './components/orders/new-orders/new-orders.component';
import { EditOrdersComponent } from './components/orders/edit-orders/edit-orders.component';
import { NewTicketComponent } from './components/tickets/new-ticket/new-ticket.component';
import { EditTicketComponent } from './components/tickets/edit-ticket/edit-ticket.component';
import { NewWorkshopComponent } from './components/workshops/new-workshop/new-workshop.component';
import { EditWorkshopComponent } from './components/workshops/edit-workshop/edit-workshop.component';
import { NewVehicleComponent } from './components/vehicles/new-vehicle/new-vehicle.component';
import { EditVehicleComponent } from './components/vehicles/edit-vehicle/edit-vehicle.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { NewServiceComponent } from './components/services/new-service/new-service.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SettingsComponent } from './components/settings/settings.component';
import { BranchesComponent } from './components/branches/branches.component';
import { OfficesComponent } from './components/offices/offices.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ApprovalRulesComponent } from './components/approval-rules/approval-rules.component';
import { AuthorizersComponent } from './components/authorizers/authorizers.component';
import { NewBranchComponent } from './components/branches/new-branch/new-branch.component';
import { EditBranchComponent } from './components/branches/edit-branch/edit-branch.component';
import { EditOfficeComponent } from './components/offices/edit-office/edit-office.component';
import { NewOfficeComponent } from './components/offices/new-office/new-office.component';
import { NewDepartmentComponent } from './components/departments/new-department/new-department.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { EditAuthorizerComponent } from './components/authorizers/edit-authorizer/edit-authorizer.component';
import { NewAuthorizerComponent } from './components/authorizers/new-authorizer/new-authorizer.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: any;
};
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

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
    SearchbarComponent,
    NewOrdersComponent,
    EditOrdersComponent,
    NewTicketComponent,
    EditTicketComponent,
    NewWorkshopComponent,
    EditWorkshopComponent,
    NewVehicleComponent,
    EditVehicleComponent,
    EditUserComponent,
    NewUserComponent,
    NewServiceComponent,
    EditServiceComponent,
    SettingsComponent,
    BranchesComponent,
    OfficesComponent,
    DepartmentsComponent,
    ApprovalRulesComponent,
    AuthorizersComponent,
    NewBranchComponent,
    EditBranchComponent,
    EditOfficeComponent,
    NewOfficeComponent,
    NewDepartmentComponent,
    EditDepartmentComponent,
    EditAuthorizerComponent,
    NewAuthorizerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    NzDatePickerComponent,
    NzButtonComponent,
    DemoNgZorroAntdModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    provideHttpClient(withJsonpSupport())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
