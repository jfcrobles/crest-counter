import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiceRollerService } from '../../services/dice-roller.service';
import { DiceRollerModalComponent } from '../dice-roller-modal/dice-roller-modal.component';


@Component({
  selector: 'app-dice-selector-modal',
  imports: [CommonModule, FormsModule, DiceRollerModalComponent],
  templateUrl: './dice-selector-modal.component.html',
  styleUrl: './dice-selector-modal.component.css'
})

export class DiceSelectorModalComponent {
  isOpen = false;
  isByLevel = true;
  dice: any[] = [];
  displayedDice: any[] = [];
  selectedDice: any[] = [];


  constructor(private diceRollerService: DiceRollerService) { }

  @Output() closeModal = new EventEmitter<void>();
  @ViewChild(DiceRollerModalComponent) diceRollerModalComponent!: DiceRollerModalComponent; 


  ngOnInit(): void {
    this.dice = this.diceRollerService.getDice();
    this.displayedDice = Array(3).fill(this.dice[0]);
  }

  open() {
    this.isOpen = true;
    this.selectedDice = [];
    this.diceRollerService.setSelectedDice([]);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.isByLevel = true;
    this.displayedDice = Array(3).fill(this.dice[0]);
    this.closeModal.emit();
  }

  onLevelClick(die: any) {
    this.displayedDice = Array(3).fill(this.dice.find(d => d.DiceLevel === die.DiceLevel));
    this.rollDice();
  }

  prevDie(index: number, level: number) {
    if (level <= 1) level = 4;
    else level--;
    this.displayedDice[index] = this.dice.find(d => d.DiceLevel === level);
  }

  nextDie(index: number, level: number) {
    if (level >= 4) level = 1;
    else level++;
    this.displayedDice[index] = this.dice.find(d => d.DiceLevel === level);
  }

  rollDice() {
    this.selectedDice = structuredClone(this.displayedDice);
    this.diceRollerService.setSelectedDice(this.selectedDice);
    this.diceRollerService.getRolledDice();
    this.close();
    this.diceRollerModalComponent.open();
  }
}
