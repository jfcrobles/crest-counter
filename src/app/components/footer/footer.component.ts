import { Component,ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceSelectorModalComponent } from '../../modals/dice-selector-modal/dice-selector-modal.component';
import { DiceRollerModalComponent } from '../../modals/dice-roller-modal/dice-roller-modal.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, DiceSelectorModalComponent, DiceRollerModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild(DiceSelectorModalComponent) diceSelectorModalComponent!: DiceSelectorModalComponent;  
  @ViewChild(DiceRollerModalComponent) diceRollerModalComponent!: DiceRollerModalComponent;
  isModalOpen = false;

  openModal() {
    this.diceSelectorModalComponent.open();
  }

  closeDiceSelectorModal() {
    
  }

  closeDiceRollerModal(){
    this.diceRollerModalComponent.close();
  }

}
