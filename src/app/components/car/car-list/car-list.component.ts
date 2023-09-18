import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars: Car[];

  constructor(private carService: CarService,private router: Router,private route: ActivatedRoute){
  }

  ngOnInit(){
    this.cars = this.carService.getCars();
  }

  toNewCar(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
