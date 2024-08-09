import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  locationList = [
    { location: 'HQ', value: 'HQ' },
    { location: 'Penang', value: 'Penang' },
    { location: 'Kuantan', value: 'Kuantan' },
    { location: 'JB', value: 'JB' },
    { location: 'KLIA', value: 'KLIA' },
  ];

  statusList = [
    { "status": "Ready to Collect", "value": 19 },
    { "status": "At Workshop", "value": 23 },
    { "status": "Scheduled for Marshal", "value": 16 },
    { "status": "Needs ticket", "value": 12 },
    { "status": "Pending", "value": 5 },
    { "status": "Other (not in maintenance cycle)", "value": 36 }
  ];

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    const data = this.statusList.map(item => item.value);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Ready to Collect', 'At Workshop', 'Scheduled for Marshal', 'Needs Ticket', 'Pending', 'Other'],
        datasets: [{
          data: data,
          backgroundColor: [
            '#2BCABC',
            '#03A1C0',
            '#686CB3',
            '#6E6E7C',
            '#BABACA',
            '#E6E6EA'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label || '';
                const value = tooltipItem.raw || 0;
                return `${label}: ${value}`;
              }
            }
          }
        },
        cutout: '70%'
      },
      plugins: [{
        id: 'centerText',
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const centerX = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
          const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

          if ("save" in ctx) {
            ctx.save();
          }
          if ("textAlign" in ctx) {
            ctx.textAlign = 'center';
          }
          if ("textBaseline" in ctx) {
            ctx.textBaseline = 'middle';
          }

          // Total number
          if ("font" in ctx) {
            ctx.font = 'bold 30px Arial';
          }
          const totalValue = data.reduce((a, b) => a + b, 0);
          if ("fillText" in ctx) {
            ctx.fillText(totalValue.toString(), centerX, centerY - 10);
          }

          // "Total Vehicles" text
          if ("font" in ctx) {
            ctx.font = '14px Arial';
          }
          if ("fillText" in ctx) {
            ctx.fillText('Total Vehicles', centerX, centerY + 20);
          }

          if ("restore" in ctx) {
            ctx.restore();
          }
        }
      }]
    });
  }

}
