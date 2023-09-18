import { Component, OnInit} from '@angular/core';
import { Part } from '../shared/part.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {

  parts: Part[] = []

  constructor(private shoppingListService: ShoppingListService){
  }

  ngOnInit(){
    this.parts = this.shoppingListService.getShoppingList();
    this.shoppingListService.partsChanged.subscribe((newParts: Part[])=>{
      this.parts = newParts;
    })
  }
}
