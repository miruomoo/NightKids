import { Component } from '@angular/core';

import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars: Car[] = [
    new Car('AE86', 'Tofu Delivery Car', 'https://s1.cdn.autoevolution.com/images/news/from-initial-d-to-real-life-aussie-man-drives-toyota-corolla-ae86-and-mazda-rx7-157593_1.jpg')
  ];
}
