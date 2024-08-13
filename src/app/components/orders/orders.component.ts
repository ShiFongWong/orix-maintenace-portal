import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  workOrders = [
    { workOrder: "00000001", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000002", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000003", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000004", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000005", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000006", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000007", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000008", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000009", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000010", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000011", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000012", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000013", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000014", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000015", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000016", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000017", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000018", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000019", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000020", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" }
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

  filterByStatus() {
    this.applyFilters();
  }

  private applyFilters() {
    // Start with all work orders
    let filteredList = [...this.workOrders];

    // Apply category filter
    const activeCategory = this.categoryList.find(cat => cat.active)?.type;
    if (activeCategory && activeCategory !== 'All') {
      filteredList = filteredList.filter(item =>
        item.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Apply status filter
    const checkedStatuses = this.statusList.filter(status => status.checked).map(status => status.type);
    if (checkedStatuses.length > 0) {
      filteredList = filteredList.filter(item =>
        checkedStatuses.includes(item.status)
      );
    }

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.workOrder.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.value.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredWorkOrders = filteredList;
  }
}
