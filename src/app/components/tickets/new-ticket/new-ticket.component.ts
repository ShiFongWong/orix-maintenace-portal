import { Component } from '@angular/core';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  categoryList = [
    {type: 'Pending', active: true},
    {type: 'Approve', active: false},
    {type: 'Complete', active: false},
  ];

  statusList = [
    {type: 'Requested', active: true},
    {type: 'Complete', active: false},
  ]

  detailsList = [
    {items: '', quantity: 0, price: 0, remarks: ''}
  ]

  isAddingDetail = false;
  selectedRange: Date[] = [];
  CalendarSeparator = "To";



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

  onClickCategory(type: string) {
    for (const item of this.categoryList) {
      item.active = item.type === type;
    }
  }

  onClickStatus(type: string) {
    for (const item of this.statusList) {
      item.active = item.type === type;
    }
  }

  addDetailsItem() {
    this.detailsList.push({items: '', quantity: 0, price: 0, remarks: ''});
  }

  deleteDetailsItem(index: number) {
    this.detailsList = this.detailsList.filter(item => index !== this.detailsList.indexOf(item));
  }
}
