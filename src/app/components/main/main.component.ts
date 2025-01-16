import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrestCounterService } from '../../services/crest-counter.service';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  crests: any[] = []; 

  constructor(private crestCounterService: CrestCounterService) { }

  ngOnInit(): void {
    this.crests = this.crestCounterService.getCrests();
  }

  incrementCounter(id: number): void {
    this.crestCounterService.incrementCounter(id, 1);
  }

  decrementCounter(id: number): void {
    this.crestCounterService.decrementCounter(id, 1);
  }

}
