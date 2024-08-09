import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  locationList = [
    {location: 'All', active: true},
    {location: 'HQ', active: false},
    {location: 'Penang', active: false},
    {location: 'Kuantan', active: false},
    {location: 'JB', active: false},
    {location: 'KLIA', active: false},
  ];

  onClickLocation(location: string) {
    for (const item of this.locationList) {
      item.active = item.location === location;
    }
  }
}
