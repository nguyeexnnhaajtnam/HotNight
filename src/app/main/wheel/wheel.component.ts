import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from "ngx-wheel";
import { DARE, TRUTH } from './constant/truthordare.constant';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  slicePrizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  seed = [...this.slicePrizes.keys()];
  colors = ['#C40202', '#FFC901'];
  timeSpin = Math.floor(Math.random() * 10)
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;
  truthList = TRUTH;
  darelist = DARE;
  action!: string;

  constructor() { }

  ngOnInit(): void {
    this.idToLandOn = this.slicePrizes[
      Math.floor(Math.random() * this.seed.length)
    ];
    this.items = this.slicePrizes.map((value: any) => ({
      fillStyle: this.colors[value % 2],
      text: value % 2 ? 'TRUTH' : 'DARE',
      id: value,
      textFillStyle: "white",
      textFontSize: "16"
    }));
  }

  reset() {
    this.wheel.reset();
    this.action = ''
    this.idToLandOn = this.slicePrizes[
      Math.floor(Math.random() * this.seed.length)
    ];
    this.items = this.slicePrizes.map((value: any) => ({
      fillStyle: this.colors[value % 2],
      text: value % 2 ? 'TRUTH' : 'DARE',
      id: value,
      textFillStyle: "white",
      textFontSize: "16"
    }));
  }
  before() { }
  async spin(prize: any) {
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    setTimeout(() => {
      this.idToLandOn = this.slicePrizes[
        Math.floor(Math.random() * this.seed.length)
      ];
    }, 500);
    if (this.idToLandOn % 2) {
      this.action = this.truthList[Math.floor(Math.random() * TRUTH.length)]
    } else {
      this.action = this.darelist[Math.floor(Math.random() * DARE.length)]
    }
  }

}
