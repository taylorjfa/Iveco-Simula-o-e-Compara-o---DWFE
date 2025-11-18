import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwayComponent } from './sway.component';

describe('Sway', () => {
  let component: SwayComponent;
  let fixture: ComponentFixture<SwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
