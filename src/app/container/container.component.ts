import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Amar', 'splash', 'John', 'Seenu'];
 
  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }
}
