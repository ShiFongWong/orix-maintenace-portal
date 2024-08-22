import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrl: './edit-ticket.component.css'
})
export class EditTicketComponent {
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

  isAddingDetail = false;  selectedRange: Date[] = [];
  CalendarSeparator = "to";
  workOrder:string|null=null;
  isHoverDelete = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.workOrder = params.get('workOrder');
      // Now you can use this.workOrder as needed
    });
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

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

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // Navigate to a fallback route, e.g., home
      this.router.navigate(['/tickets']);
    }
  }
  hoverDelete(){
    this.isHoverDelete = true; 
  }
  leaveDelete(){
    this.isHoverDelete = false;
  }
}
