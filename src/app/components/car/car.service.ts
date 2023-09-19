import { Car } from "./car.model";
import { Part } from "../shared/part.model";

export class CarService {

    private cars: Car[] = [
        new Car('Toyota AE-86', 'Akina Speedstars', 'https://i.redd.it/afyyu99p77u41.jpg', [
            new Part('4A-GE Engine', 1),
            new Part('AE-86 Panda Body Kit', 1)
        ]),
        new Car('Mazda RX-7', 'Akagi RedSuns', "http://s3.amazonaws.com/gt7sp-prod/livery/36/41/66/5846314446295664136_23.jpg", [
            new Part('13B-REW Engine', 1),
            new Part('SSR Type C Wheel', 4)
        ]),
        new Car('Nissan R32 GT-R', 'Myogi NightKids', 'http://s3.amazonaws.com/gt7sp-prod/livery/68/81/99/5908728286524998168_23.jpg', [
            new Part('RB26DETT Engine', 1),
            new Part('Work Meister S1 Wheel', 4),
            new Part('BRIDE Racing Seat', 2)
        ]),
        new Car('Subaru WRX STi', 'Fujiwara Tofu Shop', 'http://s3.amazonaws.com/gt7sp-prod/livery/08/94/38/6494847075564389408_23.jpg', [
            new Part('EJ207 Engine', 1),
            new Part('WRC Front Bumper', 1),
            new Part('Lamco Sports Guages', 1)
        ]),
      ];

    getCars(){
        //Copy the array
        return this.cars.slice();
    }

    getCar(id: number){
        return this.cars[id];
    }
}