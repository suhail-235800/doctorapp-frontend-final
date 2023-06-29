import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatereviwComponent } from './ratereviw.component';

describe('RatereviwComponent', () => {
  let component: RatereviwComponent;
  let fixture: ComponentFixture<RatereviwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatereviwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatereviwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
