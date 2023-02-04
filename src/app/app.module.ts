import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WheelComponent } from './main/wheel/wheel.component';
import { DiceComponent } from './main/dice/dice.component';
import { CardComponent } from './main/card/card.component';
import { RewardDialogComponent } from './main/reward-dialog/reward-dialog.component';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WheelComponent,
    DiceComponent,
    CardComponent,
    RewardDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
