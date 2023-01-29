import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WheelComponent } from './main/wheel/wheel.component';
import { DiceComponent } from './main/dice/dice.component';
import { CardComponent } from './main/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WheelComponent,
    DiceComponent,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
