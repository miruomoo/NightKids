import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() pageSelected= new EventEmitter<{pageName: string}>();

  onCarsSelected(){
    this.pageSelected.emit({pageName: 'cars'})
  }

  onShoppingListSelected(){
    this.pageSelected.emit({pageName: 'shoppingList'})
  }

}
