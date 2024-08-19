import { Component } from '@angular/core';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrl: './new-service.component.css'
})
export class NewServiceComponent {
  categoryList = [
    {type: 'Pending', active: true},
    {type: 'Approve', active: false},
    {type: 'Complete', active: false},
  ];

  detailsList = [
    {element: ''}
  ]

  isAddingDetail = false;

  onClickCategory(type: string) {
    for (const item of this.categoryList) {
      item.active = item.type === type;
    }
  }

  addDetailsItem() {
    this.detailsList.push({element: ''});
  }

  deleteDetailsItem(index: number) {
    this.detailsList = this.detailsList.filter(item => index !== this.detailsList.indexOf(item));
  }
}
