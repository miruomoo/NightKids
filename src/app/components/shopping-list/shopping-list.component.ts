import { Component } from '@angular/core';
import { Part } from '../shared/part.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  parts: Part[] = [
    new Part('FA20', 10),
    new Part('Body Kit', 2)
  ]

  onDataRecieved(newPart: Part){
    this.parts.push(newPart);
  }
}
