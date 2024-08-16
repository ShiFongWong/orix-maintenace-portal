import { Component } from '@angular/core';

@Component({
  selector: 'app-authorizers',
  templateUrl: './authorizers.component.html',
  styleUrl: './authorizers.component.css'
})
export class AuthorizersComponent {
  authorizer = [
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    },
    {
      "userName": "Amirul Hassan",
      "orderApproval": "Level 1",
      "quotationApproval": "Level 2"
    }
  ];


  filteredAuthorizerList = [...this.authorizer];

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
    "User Name",
    "Order Approval",
    "Quotation Approval",
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
    let filteredList = [...this.authorizer];

    this.filteredAuthorizerList = filteredList;
  }
}
