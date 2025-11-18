import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TectorComponent } from './tector.component';

describe('Tector', () => {
  let component: TectorComponent;
  let fixture: ComponentFixture<TectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
