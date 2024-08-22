import { Component, OnInit } from '@angular/core';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrl: './edit-orders.component.css'
})
export class EditOrdersComponent implements OnInit {

  statusList = [
    {type: 'Pending', active: true},
    {type: 'Approve', active: false},
    {type: 'Complete', active: false},
  ];

  detailsList = [
    {items: '', quantity: 0, price: 0, remarks: ''}
  ]

  isAddingDetail = false;
  isHoverDelete = false;
  selectedRange: Date[] = [];
  selectedDate: Date = new Date();
  workOrder: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.workOrder = params.get('workOrder');
      // Now you can use this.workOrder as needed
    });
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
    this.loadDetails();
  }

  loadDetails(){
    
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

  hoverDelete(){
    this.isHoverDelete = true; 
  }
  leaveDelete(){
    this.isHoverDelete = false;
  }
}
