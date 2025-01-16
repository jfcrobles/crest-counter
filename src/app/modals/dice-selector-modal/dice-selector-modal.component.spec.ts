import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSelectorModalComponent } from './dice-selector-modal.component';

describe('DiceSelectorModalComponent', () => {
  let component: DiceSelectorModalComponent;
  let fixture: ComponentFixture<DiceSelectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceSelectorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceSelectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
