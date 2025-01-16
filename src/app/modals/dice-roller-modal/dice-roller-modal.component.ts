import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerService } from '../../services/dice-roller.service';

@Component({
  selector: 'app-dice-roller-modal',
  imports: [CommonModule],
  templateUrl: './dice-roller-modal.component.html',
  styleUrl: './dice-roller-modal.component.css'
})
export class DiceRollerModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  isOpen = false;
  diceFaceSelected: any[] = [];

  constructor(public diceRollerService: DiceRollerService) { }

  open() { 
    this.diceFaceSelected = this.diceRollerService.getResultDiceFaces();
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
  }

}
