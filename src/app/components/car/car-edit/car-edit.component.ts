import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){
  }
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    )
  }
}