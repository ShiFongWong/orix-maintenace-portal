import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrl: './edit-branch.component.css'
})
export class EditBranchComponent {
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
