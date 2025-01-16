import { Injectable } from '@angular/core';
import { CrestCounterService } from './crest-counter.service';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  resultDiceFace: any[] = [];
  selectedDice: any[] = [];

  public dice = [
    {
      DiceLevel: 1,
      Faces: [
        {
          FaceID: 1,
          CrestID: 0,
          CrestImage: './crests/lvl1/lvl1.png',
          CrestCounter: 0,
        },
        {
          FaceID: 2,
          CrestID: 0,
          CrestImage: './crests/lvl1/lvl1.png',
          CrestCounter: 0,
        },
        {
          FaceID: 3,
          CrestID: 0,
          CrestImage: './crests/lvl1/lvl1.png',
          CrestCounter: 0,
        },
        {
          FaceID: 4,
          CrestID: 0,
          CrestImage: './crests/lvl1/lvl1.png',
          CrestCounter: 0,
        },
        {
          FaceID: 5,
          CrestID: 5,
          CrestImage: './crests/lvl1/mov.png',
          CrestCounter: 1,
        },
        {
          FaceID: 6,
          CrestID: 2,
          CrestImage: './crests/lvl1/defx2.png',
          CrestCounter: 2,
        },
      ]
    },
    {
      DiceLevel: 2,
      Faces: [

        {
          FaceID: 1,
          CrestID: 0,
          CrestImage: './crests/lvl2/lvl2.png',
          CrestCounter: 0,
        },
        {
          FaceID: 2,
          CrestID: 0,
          CrestImage: './crests/lvl2/lvl2.png',
          CrestCounter: 0,
        },
        {
          FaceID: 3,
          CrestID: 0,
          CrestImage: './crests/lvl2/lvl2.png',
          CrestCounter: 0,
        },
        {
          FaceID: 4,
          CrestID: 5,
          CrestImage: './crests/lvl2/movx2.png',
          CrestCounter: 2,
        },
        {
          FaceID: 5,
          CrestID: 1,
          CrestImage: './crests/lvl2/atkx2.png',
          CrestCounter: 2,
        },
        {
          FaceID: 6,
          CrestID: 4,
          CrestImage: './crests/lvl2/magic.png',
          CrestCounter: 1,
        },
      ]
    },
    {
      DiceLevel: 3,
      Faces: [

        {
          FaceID: 1,
          CrestID: 0,
          CrestImage: './crests/lvl3/lvl3.png',
          CrestCounter: 0,
        },
        {
          FaceID: 2,
          CrestID: 0,
          CrestImage: './crests/lvl3/lvl3.png',
          CrestCounter: 0,
        },
        {
          FaceID: 3,
          CrestID: 5,
          CrestImage: './crests/lvl3/mov.png',
          CrestCounter: 1,
        },
        {
          FaceID: 4,
          CrestID: 5,
          CrestImage: './crests/lvl3/mov.png',
          CrestCounter: 1,
        },
        {
          FaceID: 5,
          CrestID: 1,
          CrestImage: './crests/lvl3/atk.png',
          CrestCounter: 1,
        },
        {
          FaceID: 6,
          CrestID: 3,
          CrestImage: './crests/lvl3/trapx2.png',
          CrestCounter: 2,
        },
      ]
    },
    {
      DiceLevel: 4,
      Faces: [

        {
          FaceID: 1,
          CrestID: 0,
          CrestImage: './crests/lvl4/lvl4.png',
          CrestCounter: 0,
        },
        {
          FaceID: 2,
          CrestID: 5,
          CrestImage: './crests/lvl4/movx2.png',
          CrestCounter: 2,
        },
        {
          FaceID: 3,
          CrestID: 1,
          CrestImage: './crests/lvl4/atk.png',
          CrestCounter: 1,
        },
        {
          FaceID: 4,
          CrestID: 2,
          CrestImage: './crests/lvl4/def.png',
          CrestCounter: 1,
        },
        {
          FaceID: 5,
          CrestID: 4,
          CrestImage: './crests/lvl4/magicx2.png',
          CrestCounter: 2,
        },
        {
          FaceID: 6,
          CrestID: 3,
          CrestImage: './crests/lvl4/trap.png',
          CrestCounter: 1,
        },
      ]
    }
  ];

  constructor(private crestCounterService: CrestCounterService) { }

  getDice() {
    return this.dice;
  }

  getResultDiceFaces() {
    return this.resultDiceFace;
  }

  getSelectedDice() {
    return this.selectedDice;
  }

  setSelectedDice(selectedDice: any[]) {
    this.selectedDice = structuredClone(selectedDice);
  }

  getRolledDice() {
    this.resultDiceFace = [];

    this.selectedDice.forEach(die => {
      const randomFaceIndex = Math.floor(Math.random() * 6);
      this.resultDiceFace.push(die.Faces[randomFaceIndex]);
    });

    return this.resultDiceFace;
  }

  addResultDiceToCrest() {
    this.resultDiceFace.forEach(face => {
      this.crestCounterService.incrementCounter(face.CrestID, face.CrestCounter)
    })
  }

}
