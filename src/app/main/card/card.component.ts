import { Component, OnInit } from '@angular/core';
import { ACTION_LIST } from './model/card.constant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  listAction: Array<string> = ACTION_LIST;
  action: string = '';
  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listAction[1]);
  }

  generateAction() {
    this.isShown = true;
    this.action =
      this.listAction[Math.floor(Math.random() * this.listAction.length)];
  }
}
