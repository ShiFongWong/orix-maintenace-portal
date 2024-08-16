import { Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.css'
})
export class BranchesComponent {
  branches = [
    {
      "branchName": "Kuala Sentral",
      "branchCode": 234,
      "city": "Kangar",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Taman Gemilang",
      "branchCode": 953,
      "city": "Batu Pahat",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Bukit Indah",
      "branchCode": 339,
      "city": "Sandakan",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Seri Melati",
      "branchCode": 111,
      "city": "Sibu",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Desa Merdeka",
      "branchCode": 884,
      "city": "Miri",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Pantai Timur",
      "branchCode": 556,
      "city": "Kota Bharu",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Bandar Ria",
      "branchCode": 499,
      "city": "Kuantan",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Mutiara Heights",
      "branchCode": 962,
      "city": "Alor Setar",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Laguna Bay",
      "branchCode": 571,
      "city": "Malacca City",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Putra Squar",
      "branchCode": 559,
      "city": "Seremban",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Alam Damai",
      "branchCode": 246,
      "city": "Petaling Jaya",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Horizon Park",
      "branchCode": 841,
      "city": "Shah Alam",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Vista Jaya",
      "branchCode": 821,
      "city": "Ipoh",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Cahaya Utama",
      "branchCode": 565,
      "city": "Kota Kinabalu",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Puncak Seri",
      "branchCode": 838,
      "city": "Kuching",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Dataran Mahkota",
      "branchCode": 692,
      "city": "Johor Bahru",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Saujana Hills",
      "branchCode": 905,
      "city": "George Town",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Tropicana Valley",
      "branchCode": 869,
      "city": "Kuala Lumpur",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Sapphire Garden",
      "branchCode": 642,
      "city": "Tawau",
      "dateAdded": "2024-04-05"
    },
    {
      "branchName": "Lakeside Point",
      "branchCode": 109,
      "city": "Kuala Terengganu",
      "dateAdded": "2024-04-05"
    }
  ];


  filteredBranchesList = [...this.branches];

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
    "Branch Name",
    "Branch Code",
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
    let filteredList = [...this.branches];

    this.filteredBranchesList = filteredList;
  }
}
