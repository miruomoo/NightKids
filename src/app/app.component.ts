import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'NightKids';
  @Input() pageData: {pageName: string};
  pageName = ""

  afterPageSelected(pageData){
    this.pageName=pageData.pageName;
  }

}