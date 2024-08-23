import { Component } from '@angular/core';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";

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
  CalendarSeparator = "To";
  selectedRange: Date[] = [];
  totalFilter = 0;
  checkedIndices: number[] = [];

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
  }

  private applyFilters() {

    this.totalFilter = 0;
    // Start with all work orders
    let filteredList = [...this.workOrders];

    // filter by price
    const priceChanged = this.minPrice != 0 || this.maxPrice != 9999999;
    if(priceChanged){
      filteredList = filteredList.filter(item => parseInt(item.value) >= this.minPrice && parseInt(item.value) <= this.maxPrice);
      this.totalFilter++;
    }

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

  checkIndex(index: number): boolean {
    return this.checkedIndices.includes(index);
  }

  onChecked(index: number) {
    // Add the index to the array if it's not already there
    if (!this.checkedIndices.includes(index)) {
      this.checkedIndices.push(index);
    }
    // console.log('Checked indices:', this.checkedIndices);
  }

  onUnchecked(index: number) {
    // Remove the index from the array using filter
    this.checkedIndices = this.checkedIndices.filter(i => i !== index);
    // console.log('Checked indices after unchecking:', this.checkedIndices);
  }

}
