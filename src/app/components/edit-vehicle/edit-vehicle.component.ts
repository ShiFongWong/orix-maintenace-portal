import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrl: './edit-vehicle.component.css'
})
export class EditVehicleComponent {

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
  ];

  headers = ['No.', 'Work Order', 'Date', 'Service Type', 'Price($)', 'Remarks', 'Details'];

  workHistory = [
    { no: 1, workOrder: "00000001", date: "2024-05-11", serviceType: "Tuneup A", price: "4,192", remarks: "Lorem ipsum dolor sit amet,...", details: "View" },
    { no: 2, workOrder: "00000002", date: "2024-05-12", serviceType: "Tuneup B", price: "4,192", remarks: "Lorem ipsum dolor sit amet,...", details: "View" },
    { no: 3, workOrder: "00000003", date: "2024-05-13", serviceType: "Tuneup C", price: "4,192", remarks: "Lorem ipsum dolor sit amet,...", details: "View" },
    { no: 4, workOrder: "00000004", date: "2024-05-14", serviceType: "Tuneup D", price: "4,192", remarks: "Lorem ipsum dolor sit amet,...", details: "View" }
  ];

  isAddingDetail = false;

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
