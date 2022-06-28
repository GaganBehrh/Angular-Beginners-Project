import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challange2',
  templateUrl: './challange2.component.html',
  styleUrls: ['./challange2.component.css'],
})
export class Challange2Component implements OnInit {
  userName = '';

  constructor() {}

  ngOnInit(): void {}
  checkUserName() {
    this.userName = " ";
   }
}
