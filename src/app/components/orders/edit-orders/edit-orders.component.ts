import { Component, OnInit } from '@angular/core';
import {addWeeks, endOfWeek, startOfWeek} from "date-fns";
import {CompatibleDate} from "ng-zorro-antd/date-picker";
import { ActivatedRoute } from '@angular/router';

interface workOrderDetails{
  orderNumber: number,
  clientName: string,
  appointmentDate: Date,
  plateNumber: string,
  carMileage: number,
  status: string | null,
  remarks: string
}

interface detailsLists{
  items: string,
  quantity: number,
  price: number,
  remarks: string
}

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

  workOrderDetail: workOrderDetails | undefined;

  detailsList:detailsLists[] = [
    {items: '', quantity: 0, price: 0, remarks: ''}
  ]

  isAddingDetail = false;
  isHoverDelete = false;
  isCanceling = false;
  isReOpening = false;
  selectedRange: Date[] = [];
  selectedDate: Date = new Date();
  workOrder: string | null = null;

  cancel: string = "Canceled";
  pending: string = "Pending";
  total: number = 0;

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
    this.workOrderDetail = {
      orderNumber: 0,
      clientName: "",
      appointmentDate: new Date(),
      plateNumber: "",
      carMileage: 0,
      status: "",
      remarks: ""
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

  getTotal(){
    this.total = 0;
    this.detailsList.forEach(detail => {
      this.total += detail.price;
      console.log(this.total);
    });
    return this.total;
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
  onCancel(){
    this.isCanceling=!this.isCanceling;
  }

  cancelWorkOrder(){
    if(this.workOrderDetail){
      this.workOrderDetail.status = this.cancel;
    }
    this.isCanceling=!this.isCanceling;
  }

  reOpenWorkOrder(){
    if(this.workOrderDetail){
      this.workOrderDetail.status = this.pending;
    }
    this.isReOpening=!this.isReOpening;
  }

  checkCancel(){
    if(this.workOrderDetail?.status == this.cancel){
      return true;
    }
    return false;
  }
}
