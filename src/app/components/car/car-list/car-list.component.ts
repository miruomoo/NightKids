import { Component, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  @Output() carWasSelected = new EventEmitter<Car>();
  cars: Car[] = [
    new Car('AE86', 'Akina Speedstars', 'https://i.redd.it/afyyu99p77u41.jpg'),
    new Car('RX-7', 'Akagi RedSuns', "http://s3.amazonaws.com/gt7sp-prod/livery/36/41/66/5846314446295664136_23.jpg")
  ];

  onCarSelected(car: Car){
    this.carWasSelected.emit(car)
  }
}
