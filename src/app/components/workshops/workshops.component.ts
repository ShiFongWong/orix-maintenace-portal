import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {

  workshops = [
    { companyName: "Pantas Auto Services", area: "KL", address: "No. 12, Jalan Merpati, Taman Melawati, 53100 Kuala Lumpur", history: 6 },
    { companyName: "Sentral Motors Workshop", area: "KL", address: "45, Lorong Dahlia 2, Taman Sri Muda, 40400 Shah Alam, Selangor", history: 3 },
    { companyName: "Mekar Auto Repair", area: "KL", address: "23, Jalan Anggerik 3, Taman Bukit Indah, 81200 Johor Bahru, Johor", history: 18 },
    { companyName: "SpeedFix Garage", area: "KL", address: "8, Persiaran Suria, Taman Puchong Utama, 47100 Puchong, Selangor", history: 28 },
    { companyName: "Impian Auto Solutions", area: "Kelantan", address: "No. 7, Jalan Kekwa, Taman Bunga Raya, 43000 Kajang, Selangor", history: 7 },
    { companyName: "Satria Motorworks", area: "KL", address: "55, Jalan Tanjung 5, Taman Permai, 70200 Seremban, Negeri Sembilan", history: 8 },
    { companyName: "Harmoni Auto Care", area: "KL", address: "No. 18, Jalan Limau Manis, Taman Desa, 58100 Kuala Lumpur", history: 6 },
    { companyName: "Precision AutoCraft", area: "Kelantan", address: "32, Jalan Telawi, Bangsar Baru, 59000 Kuala Lumpur", history: 59 },
    { companyName: "MegaTire & Auto Center", area: "Kelantan", address: "No. 21, Jalan Putra, Taman Putra Heights, 47650 Subang Jaya, Selangor", history: 6 },
    { companyName: "AutoMaster Mechanics", area: "Terengganu", address: "14, Lorong Cempaka 1, Taman Cempaka, 31400 Ipoh, Perak", history: 7 },
    { companyName: "DayaDrive Auto Hub", area: "Perak", address: "90, Jalan Meranti, Taman Melati, 53100 Kuala Lumpur", history: 9 },
    { companyName: "Dynamic Auto Clinic", area: "Penang", address: "38, Jalan Kasturi, Taman Cheras, 56000 Kuala Lumpur", history: 18 },
    { companyName: "ProCare Auto Garage", area: "Kelantan", address: "No. 25, Jalan Bunga Raya, Taman Sentosa, 80100 Johor Bahru, Johor", history: 25 },
    { companyName: "Lestari Car Care", area: "Penang", address: "60, Lorong Bayu 3, Taman Desa Jaya, 81100 Johor Bahru, Johor", history: 9 },
    { companyName: "Elite AutoFix", area: "Penang", address: "10, Jalan Pelangi, Taman Pelangi, 11700 Gelugor, Penang", history: 35 },
    { companyName: "Prima Auto Workshop", area: "Perak", address: "72, Jalan Damai, Taman Damansara, 47800 Petaling Jaya, Selangor", history: 8 },
    { companyName: "Sahabat Auto Repair", area: "KL", address: "No. 6, Jalan Cempedak, Taman Jaya, 43650 Bandar Baru Bangi, Selangor", history: 95 },
    { companyName: "Apex AutoTune", area: "Malacca", address: "88, Lorong Teratai, Taman Kenanga, 75200 Melaka", history: 6 },
    { companyName: "Maju Motor Services", area: "Sarawak", address: "19, Jalan Matahari, Taman Sutera, 81300 Skudai, Johor", history: 36 },
    { companyName: "Prowess Auto Works", area: "Terengganu", address: "27, Jalan Sri Aman, Taman Sri Damansara, 52200 Kuala Lumpur", history: 52 }
  ];


  filteredWorkshops = [...this.workshops];

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

  areas = [
    { name: "All", checked: true },
    { name: "Kelantan", checked: false },
    { name: "Pahang", checked: false },
    { name: "Perlis", checked: false },
    { name: "Sabah", checked: false },
    { name: "Labuan", checked: false },
    { name: "Johor", checked: false },
    { name: "Malacca", checked: false },
    { name: "Penang", checked: false },
    { name: "Selangor", checked: false },
    { name: "Sarawak", checked: false },
    { name: "Putrajaya", checked: false },
    { name: "Kedah", checked: false },
    { name: "Negeri Sembilan", checked: false },
    { name: "Perak", checked: false },
    { name: "Terengganu", checked: false },
    { name: "KL", checked: false }
  ];

  activeList = [
    { name: "Active", checked: true },
    { name: "Inactive", checked: false }
  ];

  headers = ['Company Name', 'Area', 'Address', 'History', 'Details'];

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
    let filteredList = [...this.workshops];

    // Apply status filter
    const checkedAreas = this.areas.filter(status => status.checked).map(status => status.name);
    if (checkedAreas.length > 0) {
      if (checkedAreas.includes('All')) {
        filteredList = [...this.workshops];
      }else{
        filteredList = filteredList.filter(item =>
          checkedAreas.includes(item.area)
        );
      }
    }

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.companyName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.area.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.history.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredWorkshops = filteredList;
  }
}
