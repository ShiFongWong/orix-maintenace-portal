import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  workOrders = [
    { date: "2024-04-05 (Fri)", workOrder: "00000001", start: "Customer A", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000002", start: "MyMechanic Car", destination: "Customer A", woCategory: "Accident", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000003", start: "MyMechanic Car", destination: "Customer A", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000004", start: "Customer B", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000005", start: "MyMechanic Car", destination: "Customer B", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000006", start: "Customer C", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000007", start: "MyMechanic Car", destination: "Customer C", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000008", start: "Customer D", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000009", start: "MyMechanic Car", destination: "Customer D", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000010", start: "Customer A", destination: "MyMechanic Car", woCategory: "Accident", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000011", start: "MyMechanic Car", destination: "Customer A", woCategory: "Accident", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000012", start: "Customer B", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000013", start: "MyMechanic Car", destination: "Customer B", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000014", start: "Customer C", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000015", start: "MyMechanic Car", destination: "Customer C", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000016", start: "Customer D", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000017", start: "MyMechanic Car", destination: "Customer D", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000018", start: "Customer A", destination: "MyMechanic Car", woCategory: "Accident", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000019", start: "MyMechanic Car", destination: "Customer A", woCategory: "Routine", ticketCategory: "Delivery", status: "Complete", file: "PDF Form.pdf", action: "Edit" },
    { date: "2024-04-05 (Fri)", workOrder: "00000020", start: "Customer B", destination: "MyMechanic Car", woCategory: "Routine", ticketCategory: "Pickup", status: "Requested", file: "PDF Form.pdf", action: "Edit" }
  ];

  headers: string[] = [
    "Date",
    "Work Order",
    "Start",
    "Destination",
    "WO Category",
    "Ticket Category",
    "Ticket Status",
    "File",
    "Action"
  ];


  filteredWorkOrders = [...this.workOrders];

  ticketCategoryList = [
    {type: 'Pickup', active: false},
    {type: 'Delivery', active: false},
  ];

  categoryList = [
    {type: 'Routine', active: false},
    {type: 'Accident', active: false},
  ];

  statusList = [
    {type: 'All', checked: true},
    {type: 'Requested', checked: false},
    {type: 'Complete', checked: false},
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

  onClickStatus(type: string) {
    for (const item of this.statusList) {
      item.checked = item.type === type;
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

    const checkedCategories = this.ticketCategoryList.filter(status => status.active).map(status => status.type);

    if (checkedCategories.length > 0) {
      filteredList = filteredList.filter(item =>
        checkedCategories.includes(item.ticketCategory)
      );
    }

    const activeStatus = this.statusList.find(cat => cat.checked)?.type;
    console.log(activeStatus)
    if (activeStatus && activeStatus !== 'All') {
      filteredList = filteredList.filter(item =>
        item.status.toLowerCase() === activeStatus.toLowerCase()
      );
    }

    // Apply category filter
    const activeCategory = this.categoryList.find(cat => cat.active)?.type;
    console.log(activeCategory)
    if (activeCategory && activeCategory !== 'All') {
      filteredList = filteredList.filter(item =>
        item.woCategory.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (this.searchQuery) {
      filteredList = filteredList.filter(item =>
        item.workOrder.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.start.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.destination.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.woCategory.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.ticketCategory.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.file.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredWorkOrders = filteredList;
  }
}
