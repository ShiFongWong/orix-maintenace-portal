import { Component } from '@angular/core';

@Component({
  selector: 'app-approval-rules',
  templateUrl: './approval-rules.component.html',
  styleUrl: './approval-rules.component.css'
})
export class ApprovalRulesComponent {
  ordersLevelList = [
    {levelChecked: true, belowLevel: true, aboveLevel: false, range: 10000},
    {levelChecked: true, belowLevel: false, aboveLevel: false, range: 10000},
    {levelChecked: false, belowLevel: false, aboveLevel: true, range: 20000},
    {levelChecked: false, belowLevel: false, aboveLevel: true, range: 30000},
  ]

  quotationsLevelList = [
    {levelChecked: true, belowLevel: true, aboveLevel: false, range: 1000},
    {levelChecked: true, belowLevel: false, aboveLevel: false, range: 1000},
    {levelChecked: false, belowLevel: false, aboveLevel: true, range: 2000},
    {levelChecked: false, belowLevel: false, aboveLevel: true, range: 3000},
  ]
}
