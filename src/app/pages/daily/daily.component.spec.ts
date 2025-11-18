import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwayComponent } from '../sway/sway.component';

describe('SwayComponent', () => {
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
