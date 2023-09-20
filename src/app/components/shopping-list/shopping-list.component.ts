import { Component, OnInit, OnDestroy } from '@angular/core';
import { Part } from '../shared/part.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  private subHandler: Subscription;
  parts: Part[] = []

  constructor(private shoppingListService: ShoppingListService){
  }

  ngOnInit(){
    this.parts = this.shoppingListService.getShoppingList();
    this.subHandler = this.shoppingListService.partsChanged.subscribe((newParts: Part[])=>{
      this.parts = newParts;
    })
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void{
    this.subHandler.unsubscribe();
  }

}