import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  workOrders = [
    { workOrder: "00000001", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000002", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000003", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000004", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000005", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000006", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000007", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000008", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000009", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000010", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000011", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000012", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000013", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000014", value: "9,000", category: "Accident", date: "2024-04-05 (Fri)", status: "In Progress", action: "Edit" },
    { workOrder: "00000015", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000016", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000017", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" },
    { workOrder: "00000018", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000019", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Approved", action: "Edit" },
    { workOrder: "00000020", value: "9,000", category: "Routine", date: "2024-04-05 (Fri)", status: "Complete", action: "Edit" }
  ];
}
