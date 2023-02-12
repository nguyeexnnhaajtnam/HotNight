import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { DiceGameService } from 'src/service/dice-game-service/dice-game.service';
import { AnnounceDialogComponent } from './announce-dialog/announce-dialog.component';
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
  dataDice: any;
  isDisable: boolean = false;

  constructor(private dialog :MatDialog,
    private diceGameService : DiceGameService) { }

  ngOnInit(): void {
    this.getDataDiceGame();
   }

  rollDiceOne() {
    this.diceOne = Math.floor(Math.random() * 6 + 1);
    if(!this.diceTwo){
      this.openDialog(this.diceOne,1);
    }else{
      this.openDialog(this.diceOne,this.diceTwo);
    }
    
  }

  rollDiceTwo() {
    this.diceTwo = Math.floor(Math.random() * 6 + 1);
    if(!this.diceOne){
      this.openDialog(1,this.diceTwo);
    }else{
      this.openDialog(this.diceOne,this.diceTwo);
    }
    
  }

  rollDice() {
    setTimeout(() => {
      this.diceOne = Math.floor(Math.random() * 6 + 1);
      this.diceTwo = Math.floor(Math.random() * 6 + 1);
      this.openDialog(this.diceOne,this.diceTwo)
    }, 500);

  }

  getDataDiceGame(){
    this.diceGameService.getDataDiceGame().subscribe(data => {
      this.dataDice = data
    })
  }
  openDialog(diceOne:number, diceTwo:number){
    const dataChoosed = this.dataDice.find((x:any) => x.category == diceTwo)
    const action = dataChoosed[`action${diceOne}`]
    this.dialog.open(AnnounceDialogComponent, {
      data: {
        category: dataChoosed,
        action: action
      }
    })
  }
}
