import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerModalComponent } from './dice-roller-modal.component';

describe('DiceRollerModalComponent', () => {
  let component: DiceRollerModalComponent;
  let fixture: ComponentFixture<DiceRollerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceRollerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceRollerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
