import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrecificadorComponent } from './precificador.component';

describe('Precificador', () => {
  let component: PrecificadorComponent;
  let fixture: ComponentFixture<PrecificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecificadorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrecificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
