import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
  @Output() rolled: EventEmitter<boolean> = new EventEmitter();
  sides: Array<number> = [1, 2, 3, 4, 5, 6];
  diceOne!: number;
  diceTwo!: number;

  isDisable: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  rollDice() {
    setTimeout(() => {
      this.diceOne = Math.floor(Math.random() * 6 + 1);
      this.diceTwo = Math.floor(Math.random() * 6 + 1);
    }, 500);
    setTimeout(() => {
      this.isDisable = true;
      this.rolled.emit(this.isDisable);
    }, 2500);
  }
}
