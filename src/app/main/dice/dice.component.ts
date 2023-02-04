import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RewardDialogComponent } from '../reward-dialog/reward-dialog.component';

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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  rollDice() {
    setTimeout(() => {
      this.diceOne = Math.floor(Math.random() * 6 + 1);
      this.diceTwo = Math.floor(Math.random() * 6 + 1);
    }, 500);
  }
  dialogRed = this.dialog.open(RewardDialogComponent, {
    hasBackdrop: true,
    minWidth: '50vw',
    minHeight: '50vh',
  });
}
