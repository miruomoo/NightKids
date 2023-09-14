import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Car } from '../../car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent {
 @Input() car: Car;
 @Output() carData = new EventEmitter<void>();

 getCarDetails(){
  this.carData.emit()
 }
}
