import { Component } from '@angular/core';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.css'
})
export class ApprovalsComponent {

  workOrders = [
    { date: "2024-04-05 (Fri)", item: "00000001", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000002", value: "9000", placeholder: "xxxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000003", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000004", value: "9000", placeholder: "xxxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000005", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000006", value: "9000", placeholder: "xx" },
    { date: "2024-04-05 (Fri)", item: "00000007", value: "9000", placeholder: "xxx" },
    { date: "2024-04-05 (Fri)", item: "00000008", value: "9000", placeholder: "xxx" },
    { date: "2024-04-05 (Fri)", item: "00000009", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000010", value: "9000", placeholder: "xxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000011", value: "9000", placeholder: "xxxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000012", value: "9000", placeholder: "xx" },
    { date: "2024-04-05 (Fri)", item: "00000013", value: "9000", placeholder: "xxx" },
    { date: "2024-04-05 (Fri)", item: "00000014", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000015", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000016", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000017", value: "9000", placeholder: "xxxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000018", value: "9000", placeholder: "xxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000019", value: "9000", placeholder: "xxxxxx" },
    { date: "2024-04-05 (Fri)", item: "00000020", value: "9000", placeholder: "xxxxx" },
  ];

  filteredWorkOrders = [...this.workOrders];

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

  private applyFilters() {
    // Start with all work orders
    let filteredList = [...this.workOrders];

    // filter by price
    filteredList = filteredList.filter(item => parseInt(item.value) >= this.minPrice && parseInt(item.value) <= this.maxPrice);

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.value.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.placeholder.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredWorkOrders = filteredList;
  }
}
