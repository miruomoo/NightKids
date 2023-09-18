import { Component, OnInit } from "@angular/core";
import { Car } from "./car.model";
import { CarService } from "./car.service";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
    providers: [CarService]
})

export class CarComponent{
    selectedCar: Car;
    constructor (private carService: CarService){}

    ngOnInit(){
        this.carService.carSelected.subscribe((car:Car)=>{
            this.selectedCar = car;
        })
    }
}