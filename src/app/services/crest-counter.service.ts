import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrestCounterService {
  public crests = [
    {
      Name: "ATK",
      ImageURL: './crests/ATK.png',
      Counter: 0,
      ID: 1,
    },
    {
      Name: "DEF",
      ImageURL: './crests/DEF.png',
      Counter: 0,
      ID: 2,
    },
    {
      Name: "Trap",
      ImageURL: './crests/Trap.png',
      Counter: 0,
      ID: 3,
    },
    {
      Name: "Magic",
      ImageURL: './crests/Magic.png',
      Counter: 0,
      ID: 4,
    },
    {
      Name: "Mov",
      ImageURL: './crests/Mov.png',
      Counter: 0,
      ID: 5,
    }
  ];

  constructor() { }

  getCrests() {
    return this.crests;
  }

  incrementCounter(id: number, value: number): void {
    const crest = this.crests.find(item => item.ID === id);
    if (crest) {
      if (crest.Counter + value > 10)
        crest.Counter = 10;
      else
        crest.Counter += value;
    }
  }

  decrementCounter(id: number, value: number): void {
    const crest = this.crests.find(item => item.ID === id);
    if (crest) {
      if (crest.Counter - value < 0)
        crest.Counter = 0;
      else
        crest.Counter -= value;
    }
  }


  resetCounters(): void {
    this.crests.forEach(item => (item.Counter = 0));
  }
}
