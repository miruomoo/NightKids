import { Component } from '@angular/core';

@Component({
  selector: 'app-secret-message',
  templateUrl: './secret-message.component.html',
  styleUrls: ['./secret-message.component.css']
})
export class SecretMessageComponent {
  buttonStatus = false;
  clicks:any[] = [];

  onButtonClick(){
    this.clicks.push(new Date());
    if (this.buttonStatus===false){
    this.buttonStatus = true;
    }
    else{
      this.buttonStatus = false;
    }
  }

}
