import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  changeGame: number[] = [1, 2, 3]
  isChange: number = 3;
  i: number = 0;
  constructor() { }

  ngOnInit(): void { }

  onChangeGame() {
    this.isChange = this.changeGame[this.i++]
    if (this.i === this.changeGame.length) {
      this.i = 0
    }
  }
}
