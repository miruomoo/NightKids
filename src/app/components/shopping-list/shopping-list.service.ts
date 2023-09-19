import { Part } from "../shared/part.model"
import { Subject } from "rxjs";

export class ShoppingListService{
    partsChanged = new Subject<Part[]>();

    private parts: Part[] = [
        new Part('FA20', 10),
        new Part('Body Kit', 2)
      ]

    getShoppingList(){
        return this.parts.slice();
    }

    addShoppingList(newPart: Part){
        this.parts.push(newPart);
        this.partsChanged.next(this.parts.slice());
    }

    toShoppingList(newParts: Part[]){
        // for (let newPart of newParts){
        //     this.parts.push(newPart)
        // }
        this.parts.push(...newParts)
        this.partsChanged.next(this.parts.slice());
    }
    
}