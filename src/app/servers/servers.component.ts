import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
//after 2000 sec the button status changes
  constructor() {
    setTimeout(() => { this.allowNewUser=true}, 2000);
  }
  ngOnInit(): void {}
}
