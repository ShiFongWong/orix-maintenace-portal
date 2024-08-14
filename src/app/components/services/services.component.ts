import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { serviceType: 'Type A', make: 'Perodua', model: 'Bezza', year: 2024, dateCreated: '2024-04-05', elements: 3, details: 'View' },
    { serviceType: 'Type B', make: 'Honda', model: 'City', year: 2024, dateCreated: '2024-04-05', elements: 6, details: 'View' },
    { serviceType: 'Type C', make: 'Toyota', model: 'Yaris', year: 2024, dateCreated: '2024-04-05', elements: 1, details: 'View' },
    { serviceType: 'Type D', make: 'BYD', model: 'Dolphin', year: 2024, dateCreated: '2024-04-05', elements: 8, details: 'View' },
    { serviceType: 'Type E', make: 'Perodua', model: 'Axia', year: 2024, dateCreated: '2024-04-05', elements: 3, details: 'View' },
    { serviceType: 'Type F', make: 'Honda', model: 'City', year: 2024, dateCreated: '2024-04-05', elements: 2, details: 'View' },
    { serviceType: 'Type G', make: 'Perodua', model: 'Bezza', year: 2024, dateCreated: '2024-04-05', elements: 5, details: 'View' },
    { serviceType: 'Type H', make: 'Perodua', model: 'Axia', year: 2024, dateCreated: '2024-04-05', elements: 6, details: 'View' },
    { serviceType: 'Type I', make: 'BYD', model: 'Dolphin', year: 2024, dateCreated: '2024-04-05', elements: 2, details: 'View' },
    { serviceType: 'Type J', make: 'Perodua', model: 'Axia', year: 2024, dateCreated: '2024-04-05', elements: 4, details: 'View' },
    { serviceType: 'Type K', make: 'Honda', model: 'City', year: 2024, dateCreated: '2024-04-05', elements: 6, details: 'View' },
    { serviceType: 'Type L', make: 'Perodua', model: 'Bezza', year: 2024, dateCreated: '2024-04-05', elements: 5, details: 'View' },
    { serviceType: 'Type M', make: 'Perodua', model: 'Axia', year: 2024, dateCreated: '2024-04-05', elements: 7, details: 'View' },
    { serviceType: 'Type N', make: 'Perodua', model: 'Bezza', year: 2024, dateCreated: '2024-04-05', elements: 2, details: 'View' },
    { serviceType: 'Type O', make: 'BYD', model: 'Dolphin', year: 2024, dateCreated: '2024-04-05', elements: 3, details: 'View' },
    { serviceType: 'Type P', make: 'Honda', model: 'City', year: 2024, dateCreated: '2024-04-05', elements: 6, details: 'View' },
    { serviceType: 'Type Q', make: 'Perodua', model: 'Axia', year: 2024, dateCreated: '2024-04-05', elements: 4, details: 'View' },
    { serviceType: 'Type R', make: 'Perodua', model: 'Bezza', year: 2024, dateCreated: '2024-04-05', elements: 6, details: 'View' },
    { serviceType: 'Type S', make: 'BYD', model: 'Dolphin', year: 2024, dateCreated: '2024-04-05', elements: 3, details: 'View' },
    { serviceType: 'Type T', make: 'Honda', model: 'City', year: 2024, dateCreated: '2024-04-05', elements: 2, details: 'View' }
  ];


  filteredServicesList = [...this.services];

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

  activeStatus = [
    { name: 'All', checked: true },
    { name: 'Active', checked: false },
    { name: 'Inactive', checked: false }
  ]

  headers = ['Service Type', 'Make', 'Model', 'Year', 'Date Created', 'Elements', 'Details'];

  isSearching = false;
  searchQuery = '';
  isFiltering = false;
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
    // Start with all work orders
    let filteredList = [...this.services];

    this.filteredServicesList = filteredList;
  }
}
