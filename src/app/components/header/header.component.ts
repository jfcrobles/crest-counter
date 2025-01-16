import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrestCounterService } from '../../services/crest-counter.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hearts: boolean[] = [true, true, true];
  isFullscreen: boolean = false;

  constructor(private crestCounterService: CrestCounterService) { }

  toggleHeart(index: number): void {
    this.hearts[index] = !this.hearts[index];
  }

  reset(): void {
    this.hearts = [true, true, true];
    this.crestCounterService.resetCounters();
  }

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
  }

  private openFullscreen(): void {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((<any>elem).webkitRequestFullscreen) { /* Safari */
      (<any>elem).webkitRequestFullscreen();
    } else if ((<any>elem).msRequestFullscreen) { /* IE11 */
      (<any>elem).msRequestFullscreen();
    }
  }

  private closeFullscreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((<any>document).webkitExitFullscreen) { /* Safari */
      (<any>document).webkitExitFullscreen();
    } else if ((<any>document).msExitFullscreen) { /* IE11 */
      (<any>document).msExitFullscreen();
    }
  }
}
