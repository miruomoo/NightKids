import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Part } from '../../shared/part.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Part;

  constructor(private shoppingListService: ShoppingListService){
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newPart = new Part(value.name, value.amount);
    if (this.editMode){
      this.shoppingListService.updatePart(this.editedItemIndex, newPart)
    }else{
      this.shoppingListService.addShoppingList(newPart)
  }
  this.editMode = false;
  form.reset();
}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode=true;
        this.editedItem = this.shoppingListService.getPart(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  
  onDeleteClicked(){
    this.onClearClicked()
    this.editMode=false;
  }

  
  onClearClicked(){
    this.slForm.reset()
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  }
