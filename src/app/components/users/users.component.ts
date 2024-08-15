import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  employees = [
    { name: 'Amirul Hassan', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Siti Nur Aisyah', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Farhan Iskandar', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Nurul Izzati', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Hafiz Rahman', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Aida Sofia', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Zulkifli Ibrahim', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Liyana Amani', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Syafiq Abdullah', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Nadia Zainal', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Rizal Fahmi', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Intan Shafika', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Faizal Ramli', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Nabilah Ahmad', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Shahrul Nizam', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Aisyah Zahra', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Khairul Anwar', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Nur Sabrina', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Hakim Fauzi', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
    { name: 'Alia Natasha', company: 'Orix', area: 'KL', joinedDate: '2024-04-05', department: 'Fleet Services', role: 'Super Admin', details: 'View' },
  ];


  filteredEmployeeList = [...this.employees];

  categoryList = [
    {type: 'All', active: true},
    {type: 'Routine', active: false},
    {type: 'Accident', active: false},
  ];

  statusList = [
    {type: 'In Progress', checked: false},
    {type: 'Complete', checked: false},
    {type: 'Approved', checked: false},
  ];

  serviceStatusList = [
    {type: 'All', checked: true},
    {type: 'Collect', checked: false},
    {type: 'Workhsop', checked: false},
    {type: 'Ticket', checked: false},
    {type: 'Needs Ticket', checked: false},
    {type: 'Pending', checked: false},
    {type: 'Other', checked: false},
  ];

  locationList = [
    {name: "All", checked: true},
    {name: "Kelantan", checked: false},
    {name: "Pahang", checked: false},
  ]

  departments = [
    { name: 'All', checked: true },
    { name: 'Fleet Services', checked: false },
    { name: 'Dept. A', checked: false },
    { name: 'Dept. B', checked: false },
    { name: 'Dept. C', checked: false },
    { name: 'Dept. D', checked: false },
    { name: 'Dept. E', checked: false }
  ];

  roles = [
    { name: 'All', checked: true },
    { name: 'Super Admin', checked: false },
    { name: 'Admin', checked: false },
    { name: 'Manager', checked: false },
    { name: 'Marshal', checked: false },
    { name: 'View-Only', checked: false }
  ];

  headers = ['Name', 'Company', 'Area', 'Joined Date', 'Department', 'Role', 'Details'];

  isSearching = false;
  searchQuery = '';
  isFiltering = false;

  totalFilter = 0;
  minPrice = 0;
  maxPrice = 9999999;

  onSearch() {
    this.isSearching = this.searchQuery.length > 0;
    this.applyFilters();
  }

  clearSearch() {
    this.searchQuery = '';
    this.isSearching = false;
    this.applyFilters();
  }

  onClickCategory(type: string) {
    for (const item of this.categoryList) {
      item.active = item.type === type;
    }
    this.applyFilters();
  }

  onFilter() {
    this.isFiltering = !this.isFiltering;
  }

  filterByPrice() {
    this.applyFilters();
    this.isFiltering = !this.isFiltering;
  }

  filterByArea(){
    this.applyFilters();
  }

  private applyFilters() {

    this.totalFilter = 0;
    // Start with all work orders
    let filteredList = [...this.employees];

    // Apply status filter
    const checkedAreas = this.locationList.filter(status => status.checked).map(status => status.name);
    console.log(checkedAreas);
    if (checkedAreas.length > 0) {
      if (checkedAreas.includes('All')) {
      }else{
        filteredList = filteredList.filter(item =>
          checkedAreas.includes(item.area)
        );
        this.totalFilter++;
      }
    }
    console.log(filteredList);


    const checkedDepartments = this.departments.filter(status => status.checked).map(status => status.name);
    if (checkedDepartments.length > 0) {
      if (checkedDepartments.includes('All')) {
      }else{
        filteredList = filteredList.filter(item =>
          checkedDepartments.includes(item.department)
        );
        this.totalFilter++;
      }
    }

    const checkedRoles = this.roles.filter(status => status.checked).map(status => status.name);
    if (checkedRoles.length > 0) {
      if (checkedRoles.includes('All')) {
      }else{
        filteredList = filteredList.filter(item =>
          checkedRoles.includes(item.role)
        );
        this.totalFilter++;
      }
    }

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.area.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.joinedDate.toString().toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.details.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredEmployeeList = filteredList;
  }
}
