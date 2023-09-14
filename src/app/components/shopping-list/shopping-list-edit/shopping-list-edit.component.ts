import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') partName: ElementRef
  @ViewChild('amountInput') partAmount: ElementRef
  @Output() partData = new EventEmitter<Part>();

  onAddClicked(){
    this.partData.emit(new Part(this.partName.nativeElement.value, this.partAmount.nativeElement.value))
  }

  
  onDeleteClicked(){
    
  }

  
  onClearClicked(){
    
  }

}
