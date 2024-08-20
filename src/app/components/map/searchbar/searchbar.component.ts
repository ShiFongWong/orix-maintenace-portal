import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  isSearchbarOpen = true;
  isSearching = false;
  numberPlateSelected: null | string = '';
  searchQuery: string = '';
  carList = [
    { carModel: "Honda City", numberPlate: "V65260" },
    { carModel: "Perodua Bezza", numberPlate: "K78753" },
    { carModel: "Proton Saga", numberPlate: "E77072" },
    { carModel: "Perodua Axia", numberPlate: "B78167" },
    { carModel: "Toyota Yaris", numberPlate: "M93763" },
    { carModel: "BYD Dolphin", numberPlate: "E86752" },
    { carModel: "Neta V", numberPlate: "A80922" },
    { carModel: "Perodua Axia", numberPlate: "H49842" },
    { carModel: "Honda City", numberPlate: "B23083" },
    { carModel: "BYD Dolphin", numberPlate: "E47128" },
    { carModel: "Perodua Axia", numberPlate: "06168" },
    { carModel: "Neta V", numberPlate: "A83187" },
    { carModel: "Honda City", numberPlate: "K28465" },
    { carModel: "Honda City", numberPlate: "P74021" },
    { carModel: "Perodua Bezza", numberPlate: "S90122" },
    { carModel: "BYD Dolphin", numberPlate: "K23336" },
    { carModel: "Honda City", numberPlate: "C62206" },
    { carModel: "Honda City", numberPlate: "J64460" },
    { carModel: "Neta V", numberPlate: "R36199" },
    { carModel: "Honda City", numberPlate: "M72861" }
  ];

  filteredCarList = [...this.carList];

  toggleSearchbar() {
    this.isSearchbarOpen = !this.isSearchbarOpen;
  }

  onClickCarModel(numberPlate: string) {
    this.numberPlateSelected = this.numberPlateSelected === numberPlate ? null : numberPlate;
  }

  onSearch() {
    this.isSearching = this.searchQuery.length > 0;
    this.updateFilteredList();
  }

  clearSearch() {
    this.searchQuery = '';
    this.isSearching = false;
    this.updateFilteredList();
  }

  private updateFilteredList() {
    this.filteredCarList = this.carList.filter(item =>
      item.carModel.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.numberPlate.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
