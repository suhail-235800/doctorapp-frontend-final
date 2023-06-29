import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyratingsComponent } from './myratings.component';

describe('MyratingsComponent', () => {
  let component: MyratingsComponent;
  let fixture: ComponentFixture<MyratingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyratingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
