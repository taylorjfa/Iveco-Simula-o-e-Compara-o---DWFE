import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaGaragemComponent } from './minha-garagem.component';

describe('MinhaGaragemComponent', () => {
  let component: MinhaGaragemComponent;
  let fixture: ComponentFixture<MinhaGaragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaGaragemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinhaGaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
