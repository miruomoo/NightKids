import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() pageSelected = new EventEmitter<string>();

  onCarsSelected(){
    this.pageSelected.emit('cars')
  }

  onShoppingListSelected(){
    this.pageSelected.emit('shoppingList')
  }

}
