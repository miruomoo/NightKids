import { EventEmitter } from "@angular/core";
import { Part } from "../shared/part.model"

export class ShoppingListService{
    partsChanged = new EventEmitter<Part[]>();

    private parts: Part[] = [
        new Part('FA20', 10),
        new Part('Body Kit', 2)
      ]

    getShoppingList(){
        return this.parts.slice();
    }

    addShoppingList(newPart: Part){
        this.parts.push(newPart);
        this.partsChanged.emit(this.parts.slice());
    }

    toShoppingList(newParts: Part[]){
        // for (let newPart of newParts){
        //     this.parts.push(newPart)
        // }
        this.parts.push(...newParts)
        this.partsChanged.emit(this.parts.slice());
    }
    
}