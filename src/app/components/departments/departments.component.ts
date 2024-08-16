import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  departmentList = [
    {
      "departmentName": "Customer Service",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Fleet Management",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Sales and Marketing",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Vehicle Maintenance",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Finance and Accounting",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Human Resources",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Operations",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "IT and Systems",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Legal and Compliance",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Leasing and Contracts",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Business Development",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Risk Management",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Customer Support",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Vehicle Procurement",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Quality Assurance",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Roadside Assistance",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Insurance and Claims",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Corporate Affairs",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Sustainability",
      "dateAdded": "2024-04-05"
    },
    {
      "departmentName": "Data Analytics",
      "dateAdded": "2024-04-05"
    }
  ];


  filteredDepartmentList = [...this.departmentList];

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

  headers = [
    "Department Name",
    "Date Added",
    "Details"
  ];

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
    let filteredList = [...this.departmentList];

    this.filteredDepartmentList = filteredList;
  }
}

