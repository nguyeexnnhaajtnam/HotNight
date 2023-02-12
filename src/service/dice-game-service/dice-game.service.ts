import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
  export class DiceGameService {
    constructor(){}

    getDataDiceGame(){
        return  of([
            {
                category: 1,
                action1: 'Kiss Forehead',
                action2: 'Lick Lips',
                action3: 'Massage Head',
                action4: 'Challenge 1/5 minutes',
                action5: 'Pleasure Oral for him/her',
                action6: 'Punishment Spank/slap his/her ass really hard',
            },
            {
                category: 2,
                action1: 'Kiss Cheek',
                action2: 'Lick Neck',
                action3: 'Massage Neck/Shoulder',
                action4: 'Challenge 2/10 minutes',
                action5: 'Pleasure Lick/Kiss everywhere he/she says',
                action6: 'Punishment Tie up and blindfold him/her and edging',
            },
            {
                category: 3,
                action1: 'Kiss Lips',
                action2: 'Lick Nipples',
                action3: 'Massage Arm/Leg',
                action4: 'Challenge 3/15 minutes',
                action5: 'Pleasure Cuddle him/her',
                action6: 'Punishment Tickle' ,
            },
            {
                category: 4,
                action1: '"The French Kiss"',
                action2: 'Lick Body',
                action3: 'Massage Boobs',
                action4: 'Challenge 4/20 minutes',
                action5: 'Pleasure Say "I LOVE YOU"',
                action6: 'Punishment Bite his/her nipple',
            },
            {
                category: 5,
                action1: 'Kiss Nipples',
                action2: 'Lick Armpit',
                action3: 'Massage Butt',
                action4: 'Challenge 5/25 minutes',
                action5: 'Do anything you want',
                action6: 'Lose your turn',
            },
            {
                category: 6,
                action1: 'Kiss Pussy/Penis',
                action2: 'Lick Pussy/Penis',
                action3: 'Massage Pussy/Penis',
                action4: 'Challenge 6/30 minutes',
                action5: `Let's Fuck`,
                action6: 'Do anything he/she says',
            },
        ])
    }
  }