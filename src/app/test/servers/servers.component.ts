import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = "No server was created";
  serverName = 'New Server';
  servers = ['Server 1', 'Server 2']

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created.'

  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
}
}

