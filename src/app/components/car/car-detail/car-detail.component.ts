import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'
import { Car } from '../car.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  car: Car;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private carService: CarService, private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.car = this.carService.getCar(this.id);
      }
    );
    
  }

  toShoppingList(){
    this.shoppingListService.toShoppingList(this.car.parts);
  }
}
