import { Part } from "../shared/part.model"
import { Subject } from "rxjs";

export class ShoppingListService{
    partsChanged = new Subject<Part[]>();
    startedEditing = new Subject<number>();

    private parts: Part[] = [
        new Part('FA20', 10),
        new Part('Body Kit', 2)
      ]

    getShoppingList(){
        return this.parts.slice();
    }

    getPart(index: number){
        return this.parts[index];
    }

    updatePart(index: number, newPart: Part){
        this.parts[index] = newPart;
        this.partsChanged.next(this.parts.slice())
    }

    deletePart(index: number){
        this.parts.splice(index, 1)
        this.partsChanged.next(this.parts.slice())
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