import { Component, ElementRef, ViewChild } from '@angular/core';
import { Part } from '../../shared/part.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') partName: ElementRef
  @ViewChild('amountInput') partAmount: ElementRef

  constructor(private shoppingListService: ShoppingListService){
  }

  onAddClicked(){
    this.shoppingListService.addShoppingList(new Part(this.partName.nativeElement.value, this.partAmount.nativeElement.value))
  }

  
  onDeleteClicked(){
    
  }

  
  onClearClicked(){
    
  }

}
