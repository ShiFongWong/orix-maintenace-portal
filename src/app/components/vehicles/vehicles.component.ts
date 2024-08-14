import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

  vehicleList = [
    {
      companyName: "Orix",
      lastService: "2024-04-05",
      location: "Orix Carpark",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Collect",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "MegaTrade Ventures",
      lastService: "2024-04-05",
      location: "BBBBBB",
      mileage: 9000,
      plateNumber: "JFB 5678",
      serviceStatus: "Collect",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Puncak Logistics",
      lastService: "2024-04-05",
      location: "Orix Carpark",
      mileage: 9000,
      plateNumber: "NBX 9012",
      serviceStatus: "Collect",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Orix",
      lastService: "2024-04-05",
      location: "Orix Carpark",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Collect",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Puncak Logistics",
      lastService: "2024-04-05",
      location: "AAA",
      mileage: 9000,
      plateNumber: "KJJ 7788",
      serviceStatus: "Workshop",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Orix",
      lastService: "2024-04-05",
      location: "Orix Carpark",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Workshop",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "MegaTrade Ventures",
      lastService: "2024-04-05",
      location: "BBBBBB",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Ticket",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "AsiaCargo Express",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Ticket",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Industri Gemilang Sdn. Bhd.",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Needs Ticket",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "LajuTransport Solutions",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "KLQ 7890",
      serviceStatus: "Needs Ticket",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Industri Gemilang Sdn. Bhd.",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Berkat Logistics Sdn. Bhd.",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "MCB 1122",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Industri Gemilang Sdn. Bhd.",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Seri Kargo Malaysia",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "SZA 1345K",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Daya Global Transport",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "LajuTransport Solutions",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "TPR 8899",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Industri Gemilang Sdn. Bhd.",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "EcoFleet Services",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "WYY 9900",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Alam Logistics",
      lastService: "2024-04-05",
      location: "CCCC",
      mileage: 9000,
      plateNumber: "WUR 1234",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    },
    {
      companyName: "Kencana Holdings",
      lastService: "2024-04-05",
      location: "DDDD",
      mileage: 9000,
      plateNumber: "JDT 1029",
      serviceStatus: "Other",
      newWO: "New WO",
      details: "View"
    }
  ];

  filteredVehicleList = [...this.vehicleList];

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

  activeList = [
    { name: "Active", checked: true },
    { name: "Inactive", checked: false }
  ];

  headers = ['Company Name', 'Last Service', 'Location', 'Mileage', 'Plate Number', 'Service Status', 'New WO', 'Details'];

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
    let filteredList = [...this.vehicleList];

    // Apply status filter
    const checkedServiceStatus = this.serviceStatusList.filter(status => status.checked).map(status => status.type);
    console.log(checkedServiceStatus);
    if (checkedServiceStatus.length > 0) {
      if (checkedServiceStatus.includes('All')) {
      }else{
        filteredList = filteredList.filter(item =>
          checkedServiceStatus.includes(item.serviceStatus)
        );
      }
    }
    console.log(filteredList);


    const checkedLocation = this.locationList.filter(status => status.checked).map(status => status.name);
    if (checkedLocation.length > 0) {
      if (checkedLocation.includes('All')) {
      }else{
        filteredList = filteredList.filter(item =>
          checkedLocation.includes(item.location)
        );
      }
    }

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.companyName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.lastService.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.mileage.toString().toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.plateNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.serviceStatus.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.newWO.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredVehicleList = filteredList;
  }
}
