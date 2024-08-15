import { Component } from '@angular/core';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";

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
  CalendarSeparator = "To";
  selectedRange: Date[] = [];
  totalFilter = 0;
  minPrice = 0;
  maxPrice = 999999;

  setToday(): void {
    const today = new Date();
    this.selectedRange = [today, today];
  }

  setTomorrow(): void {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.selectedRange = [tomorrow, tomorrow];
  }

  setThisWeek(): void {
    const today = new Date();
    this.selectedRange = [startOfWeek(today), endOfWeek(today)];
  }

  setNextWeek(): void {
    const nextWeek = addWeeks(new Date(), 1);
    this.selectedRange = [startOfWeek(nextWeek), endOfWeek(nextWeek)];
  }

  cancel(): void {
    this.selectedRange = [];
    // Add logic to close the picker if needed
  }

  apply(): void {
    // Add logic to apply the selected date range
    console.log('Applied range:', this.selectedRange);
  }

  onOk(result: CompatibleDate | null): void {
    if (Array.isArray(result)) {
      this.selectedRange = result;
    } else {
      this.selectedRange = [];
    }
  }


  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

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
    this.totalFilter = 0;
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
      this.totalFilter++;
    }

    const priceChanged = this.minPrice != 0 || this.maxPrice != 999999;
    if(priceChanged){
      filteredList = filteredList.filter(item => parseInt(item.value) >= this.minPrice && parseInt(item.value) <= this.maxPrice);
      this.totalFilter++;
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
