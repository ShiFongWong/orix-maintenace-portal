import { Component } from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.css'
})
export class OfficesComponent {
  offices = [
    {
      "officeName": "Kuala Lumpur Central",
      "branch": "Branch ABC123",
      "city": "Kuala Lumpur",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Penang Auto Leasing",
      "branch": "Branch ABC123",
      "city": "George Town",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Johor Bahru Mobility",
      "branch": "Branch ABC123",
      "city": "Johor Bahru",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Sabah Vehicle Rentals",
      "branch": "Branch ABC123",
      "city": "Kuching",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Melaka Drive",
      "branch": "Branch ABC123",
      "city": "Kota Kinabalu",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Ipoh Car Leasing",
      "branch": "Branch ABC123",
      "city": "Ipoh",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Bandar Ria",
      "branch": "Branch ABC123",
      "city": "Shah Alam",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Mutiara Heights",
      "branch": "Branch ABC123",
      "city": "Petaling Jaya",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Seremban Leasing Center",
      "branch": "Branch ABC123",
      "city": "Seremban",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Putra Squar",
      "branch": "Branch ABC123",
      "city": "Malacca City",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Alam Damai",
      "branch": "Branch ABC123",
      "city": "Alor Setar",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Kuantan Auto Lease",
      "branch": "Branch ABC123",
      "city": "Kuantan",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Kota Bharu Motors",
      "branch": "Branch ABC123",
      "city": "Kota Bharu",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Miri Vehicle Services",
      "branch": "Branch ABC123",
      "city": "Miri",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Puncak Seri",
      "branch": "Branch ABC123",
      "city": "Sibu",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Sandakan Leasing Solutions",
      "branch": "Branch ABC123",
      "city": "Sandakan",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Tawau Car Hub",
      "branch": "Branch ABC123",
      "city": "Tawau",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Batu Pahat Rentals",
      "branch": "Branch ABC123",
      "city": "Batu Pahat",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Sapphire Garden",
      "branch": "Branch ABC123",
      "city": "Kangar",
      "dateAdded": "2024-04-05"
    },
    {
      "officeName": "Kuala Terengganu Drive Rentals",
      "branch": "Branch ABC123",
      "city": "Kuala Terengganu",
      "dateAdded": "2024-04-05"
    }
  ];


  filteredOfficeList = [...this.offices];

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
    "Office Name",
    "Branch",
    "City",
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
    let filteredList = [...this.offices];

    this.filteredOfficeList = filteredList;
  }
}
