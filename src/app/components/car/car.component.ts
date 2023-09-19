import { Component } from "@angular/core";
import { CarService } from "./car.service";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
    providers: [CarService]
})

export class CarComponent{
    constructor (){}

    ngOnInit(){
        // this.carService.carSelected.subscribe((car:Car)=>{
        //     this.selectedCar = car;
        // })
    }
}