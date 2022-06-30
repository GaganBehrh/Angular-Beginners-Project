import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challange3',
  templateUrl: './challange3.component.html',
  styles: [
    `.appearance{
      color: green;
      background-color:yellow;
    }
    `,
  ]
})
export class Challange3Component implements OnInit {
  messageappearance = false;
  log = [];
  constructor() {}
  OnclickDisplayDetail() {
    this.messageappearance = true;
    this.log.push(this.log.length + 1);
  }
  ngOnInit(): void {}
}
