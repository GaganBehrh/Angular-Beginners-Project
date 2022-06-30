import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  servers = [
    'TestServer1',
    'TestServer2',
    'TestServer3',
    'TestServer3',
    'TestServer3',
  ];
  //after 2000 sec the button status changes
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    // to push the server
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created. Name of the server is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
